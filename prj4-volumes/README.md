# Docker Volumes Deep Dive (Production Mindset) — Conceptual Repo

## Overview
This repository demonstrates **production-oriented Docker storage patterns** using PostgreSQL.
It focuses on understanding:
- **Bind Mounts vs Named Volumes**
- **Dev vs Production** Docker Compose design
- **Backup workflow** using `pg_dump` (typically automated via cron jobs in real systems)

> This is a **design + understanding** repository. It can be executed, but the main goal is to show the correct production mindset.

---

## Project Structure
- `docker-compose.dev.yml`  
  Development setup using **bind mounts** for visibility and quick iteration.

- `docker-compose.prod.yml`  
  Production-style setup using a **named volume** for isolation and stability.

- `db/init.sql`  
  Example schema for demonstration.

- `scripts/backup.sh`  
  A backup script that produces an SQL dump using `pg_dump` (includes **schema + data** by default).

---

## Key Concepts

### Bind Mount vs Named Volume
- **Bind mount (Dev):** data stored on the host filesystem (easy to inspect, but can cause permissions issues)
- **Named volume (Prod):** data managed by Docker (better isolation and safer defaults)

### Volumes are NOT Backups
- A volume keeps data **persistent across container restarts**
- A backup is an **external copy** you can restore from if the volume/server is lost

### Backup Contents
The backup file produced by `pg_dump` contains:
- Schema (tables, constraints, indexes, sequences)
- Data (rows)

It does **not** include an ERD diagram image, but ERD can be regenerated from the schema.

---

## Optional: How to Run

### Dev
```bash
docker compose -f docker-compose.dev.yml up -d

