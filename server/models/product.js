import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Product name is required"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  description: {
    type: String,
  },
  address: {
    type: String,
    required: [true, "Address is required"],
  },
});

export const Product = mongoose.model("Product", productSchema);
