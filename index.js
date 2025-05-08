import express from "express";
import { connectToDatabase } from "./db.js";
import authRoutes from "./routes.js";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
const app = express();

dotenv.config();

const PORT = process.env.PORT;
app.use(express.json());
app.use(morgan("dev"));
// ✅ CORS Setup
app.use(
  cors({
    origin: "http://localhost:3000", // your frontend
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // set to true if using cookies or auth
  })
);

app.use("/api/v1/", authRoutes);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
