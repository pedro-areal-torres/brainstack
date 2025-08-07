## Goal

Design a simplified version of Discord with the ability to join servers, send real-time messages across channels, track unread messages, and handle mentions.

## Functional Requirements

- Users can join servers.
- Servers contain multiple channels.
- Channels hold real-time messages.
- Users can see unread messages and mentions.

## Real-Time Communication

### Why HTTP Is Not Ideal

- **HTTP (v1.1)** is stateless and request/response-based, which means the client must poll the server frequently to check for updates.
- **WebSockets** maintain a persistent connection, allowing the server to push messages instantly to connected clients.

### Why WebSockets Are Preferred

- Enable low-latency, bidirectional communication.
- Reduce server load caused by constant polling.
- Ideal for chat apps where immediate message delivery is expected.

> HTTP/2 could support server push, but WebSockets are still more suited for bidirectional, real-time messaging.

## Message Delivery and Tracking

### Viewing Messages

- When a user opens a channel, the client sends a request like `GET /channels/:channelId/messages`.
- Response can be paginated (e.g., latest 10 messages, sorted descending).
- Scroll events can trigger fetching older messages.

### Tracking Unread Messages

Schema design to support unread tracking:

#### `messages`

- `id`
- `user_id` (sender)
- `mention_id` (nullable)
- `server_id`
- `channel_id`
- `sent_at`

#### `user_activity`

- `id`
- `user_id`
- `server_id`
- `channel_id`
- `last_read_at`

To get unread messages:

```sql
SELECT COUNT(*)
FROM messages
WHERE channel_id = ?
AND sent_at > (
  SELECT last_read_at
  FROM user_activity
  WHERE user_id = ? AND channel_id = ?
);
```

## Mentions Optimization

Use a key-value store (e.g., Redis) for mention counters:

- **Key:** `mention:{userId}:{serverId}:{channelId}`
- **Value:** number of mentions

This allows fast lookup when a user opens the app to check where they were mentioned.

---

## Sharding Strategy

- Shard by `channel_id` or `server_id`.
- Sharding by `channel_id` is more granular and allows isolating traffic per channel, which aligns better with messaging volume and access patterns.

---

## Storage Decisions

### Relational Database

- Suitable for early-stage development due to strong consistency and clear relationships between users, servers, and channels.

### MongoDB (Initial Choice)

- Discord initially used MongoDB.
- Over time, the volume of messages became massive.
- Indexes became inefficient, and performance degraded due to unbounded document growth.

---

## Migration to Cassandra

### Why Cassandra

- Scales horizontally with ease.
- Optimized for write-heavy workloads.
- High availability and tunable consistency.
- Ideal for append-only data structures like message logs.

### Challenges Overcome

- More suited for storing billions of messages.
- Avoided bottlenecks in querying and delivering messages at scale.
