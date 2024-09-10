import mongoose from "mongoose";

export async function connectMongoDB(URL) {
  return mongoose
    .connect(URL)
    .then(() => console.log("mongoDB connected"))
    .catch((err) => console.log("error connecting to mongoDB", err));
}
