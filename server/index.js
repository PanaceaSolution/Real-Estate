import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.js";
import { authRouter } from "./routes/auth.js";
import { productRouter } from "./routes/product.js";

dotenv.config();

const app = express();

app.use(express.json());

//Test routes

app.get("/",(req, res)=>{
res.send("API is running")
})
app.use("/product", productRouter);

// app.use("/api/v1/auth", authRouter);
app.use("/user", authRouter);



const port = process.env.PORT || 5000;



const start = async () => {
  try {
    await connectDB(process.env.MONGOO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
