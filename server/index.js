import express from "express";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import { connectMongoDB } from "./connection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }));

connectMongoDB(
  process.env.MONGODB_URL
);

app.use("/", router);

app.listen(PORT, () => console.log("Server running on port 3000"));
