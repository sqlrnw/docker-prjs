#!/usr/bin/env bash
set -euo pipefail


CONTAINER_NAME="prj4-volumes-db-1"
DB_NAME="appdb"
DB_USER="app"


BACKUP_DIR="./backup"


mkdir -p "$BACKUP_DIR"
TS="$(date +%F_%H-%M-%S)"
OUT_FILE="${BACKUP_DIR}/${DB_NAME}_${TS}.sql"

echo "[INFO] Starting backup -> $OUT_FILE"


docker exec -t "$CONTAINER_NAME" pg_dump -U "$DB_USER" "$DB_NAME" > "$OUT_FILE"

echo "[INFO] Backup finished successfully"

