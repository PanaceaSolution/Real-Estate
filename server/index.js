import express from "express";
import { handleError } from "./middlewares/errorHandler.js";

const app = express();

app.get("/", handleError,(req, res) => {
  res.send("This route is working fine");
});

app.listen(3000, () => console.log("Server running on port 3000"));
