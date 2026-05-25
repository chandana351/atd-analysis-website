import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
  })
);
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "ATD Analysis API" });
});

app.use("/api/contact", contactRoutes);

async function startServer() {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("MONGO_URI is not set. Contact submissions will fail until MongoDB is configured.");
    } else {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected");
    }

    app.listen(port, () => {
      console.log(`ATD Analysis API running on port ${port}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
}

startServer();
