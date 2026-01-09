# Project 2 — Node.js + MongoDB with Docker Compose

This project is designed to teach Docker Compose in a practical way and to clarify common Docker concepts such as:

- Service-to-service communication using **service names** instead of IPs
- Environment variables
- **Named Volumes** vs **Bind Mounts**
- Why applications must listen on `0.0.0.0` inside containers
- Why the database name does not have to be in the MongoDB URL
- Fixing the common issue where Chrome keeps loading on `localhost`

---

## Project Structure

```text
docker-compose-node-mongo/
├─ server.js
├─ package.json
├─ package-lock.json
├─ Dockerfile
├─ .dockerignore
└─ docker-compose.yml

What the project does ?
API (Node.js / Express)

GET /
Returns JSON with a message and the container hostname

GET /health
Returns OK (health check endpoint)

POST /messages
Saves a message to MongoDB

GET /messages
Returns the latest 50 messages

Database (MongoDB)

Data is stored in a Named Volume

Data persists even if containers are stopped or removed

