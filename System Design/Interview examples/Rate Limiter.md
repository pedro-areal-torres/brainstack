## Goal

Control the number of requests a client can make to a server or service within a fixed time frame.

## Implement on the Client vs Service?

- **Client-side** is insecure: users can bypass using tools like `curl` or custom scripts.
- **Service-level** fails under horizontal scaling: with multiple service instances, rate limiting can be bypassed by routing requests to different nodes.

**Solution:** Use a shared rate limiter service acting as a reverse proxy before the actual API.

## Non-Functional Requirements

- **Low latency:** Adding a rate limiter introduces extra processing. It must be optimized for minimal delay.
- **High availability:** The limiter should not become a single point of failure.
- **Fail behavior:**
  - _Fail-open_: Allow requests if the limiter fails, risking overuse.
  - _Fail-closed_: Block all requests if it fails, impacting all users.
  - _Default choice_: Fail-open is preferred to avoid total system failure.
- **Persistent rules:** Rules must be consistent and accessible by all limiter instances.

## Architecture

Client → Rate Limiter (Reverse Proxy) → Service/API
↓
Cached Rules Store
↓
Persistent Database

- The rate limiter acts before the actual service.
- Reads from cached rules, with a background process to sync from the DB.
- Uses an in-memory key-value store (e.g., Redis) to track requests.

## Rule Schema Example

```json
{
  "id": "login-rate-limit",
  "api": "/login",
  "limit": 100,
  "time_unit": "minute"
}
```

## Algorithms

### Fixed Window

- Counts requests in fixed time slots (e.g., per minute).
- Simple and efficient.
- Problem: allows request spikes at window edges (e.g., 100 at 11:59:59 and 100 at 12:00:01).

### Sliding Window

- Tracks each request timestamp and slides over time.
- More accurate.
- Higher memory usage and processing cost.

## Request Tracking (Redis Schema)

- Key: user:{userId}:api:{endpoint}
- Value: Counter + timestamp
- Set expiration (EXPIRE) matching the time window.
  Example: Allow 100 requests per minute → counter expires after 60 seconds.

## Optimizations

- Cache rules in memory (Redis or local in-process cache).
- Use background jobs to periodically sync updated rules from the DB.
- Place rate limiter early in the request flow (can even be before authentication).
