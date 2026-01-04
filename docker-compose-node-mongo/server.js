const express = require("express");
const { MongoClient } = require("mongodb");
const os = require("os");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;


const MONGO_HOST = process.env.MONGO_HOST || "mongo";
const MONGO_PORT = process.env.MONGO_PORT || "27017";
const MONGO_DB = process.env.MONGO_DB || "appdb";

const MONGO_URL = `mongodb://${MONGO_HOST}:${MONGO_PORT}`;

let db;

async function connectToMongoWithRetry() {
  const client = new MongoClient(MONGO_URL);
  while (true) {
    try {
      await client.connect();
      db = client.db(MONGO_DB);
      console.log("✅ Connected to MongoDB:", MONGO_URL, "DB:", MONGO_DB);
      break;
    } catch (err) {
      console.log("⏳ Mongo not ready yet, retrying in 2s...", err.message);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
}

app.get("/", (req, res) => {
  res.json({
    message: "Compose Node + Mongo is running!",
    hostname: os.hostname()
  });
});

// Healthcheck للتطبيق
app.get("/health", (req, res) => res.status(200).send("OK"));

// يكتب رسالة في DB
app.post("/messages", async (req, res) => {
  const text = req.body?.text;
  if (!text) return res.status(400).json({ error: "text is required" });

  const doc = { text, createdAt: new Date() };
  const result = await db.collection("messages").insertOne(doc);
  res.status(201).json({ id: result.insertedId, ...doc });
});

// يجيب كل الرسائل
app.get("/messages", async (req, res) => {
  const items = await db
    .collection("messages")
    .find({})
    .sort({ createdAt: -1 })
    .limit(50)
    .toArray();

  res.json(items);
});

connectToMongoWithRetry().then(() => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 API listening on port ${PORT}`);
  });
});

