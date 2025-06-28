import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import cors from "cors";

import { Server } from "socket.io";
import { connectToSocket } from "./controllers/socketManager.js";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// Routes
app.use("/api/v1/users", userRoutes);

// Port
const PORT = process.env.PORT || 8000;
app.set("port", PORT);

// ✅ Correct URI with working credentials
const MONGO_URI = 'mongodb+srv://balmukundp02:balmukund123@mukundzoom.d4hfxdk.mongodb.net/zoomApp?retryWrites=true&w=majority';

const start = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`✅ MongoDB Connected - Host: ${conn.connection.host}`);

    server.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
      console.log("Eveything is fine");
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

start();
