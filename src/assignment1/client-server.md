# Client-Server Architecture

## Definition

Client-Server Architecture is a **network-based architecture** where multiple clients (users/devices) request and receive services from a centralized server. It separates **service requesters (clients)** from **service providers (servers)**.

---

## 🧩 Components

### 1. **Client**
- Initiates communication with the server
- Sends requests (e.g., fetching data, submitting forms)
- Can be browsers, mobile apps, desktop apps
- Has UI and handles user interaction

### 2. **Server**
- Waits for incoming client requests
- Processes business logic and accesses databases
- Sends back a response to the client
- Can be a web server, database server, or application server

---

## Communication Process

1. Client sends a request (usually HTTP/HTTPS)
2. Server processes the request
3. Server sends back a response
4. Client receives and renders the response

---

## Characteristics

- **Centralized Server**: One or more powerful servers manage resources and logic.
- **Scalability**: Multiple clients can be connected simultaneously.
- **Security**: Easier to enforce access control and data protection on the server.
- **Maintenance**: Centralized updates on the server without touching the client.

---

## Advantages

- Separation of concerns (UI vs business logic)
- Reusability of server-side code
- Easy to manage and monitor
- Can be scaled horizontally (load balancing)

---

## Disadvantages

- Server is a single point of failure (unless handled with redundancy)
- Network dependency (requires internet or local network)
- Can become complex under heavy traffic

---

## Common Examples

- Web Browsers (clients) accessing websites (servers)
- Mobile apps fetching data from REST APIs
- Email clients connecting to mail servers

---

## Technologies Used

- **Clients**: HTML/CSS/JS, React, Angular, iOS/Android apps
- **Servers**: Node.js, Express, Django, Flask, Spring Boot
- **Protocols**: HTTP, HTTPS, WebSocket, TCP/IP

---

