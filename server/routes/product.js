import express from "express";
const router = express.Router();

import { Product } from "../models/product.js";

router.post("/create", async (req, res) => {
  try {
    let { name, price, description, address } = req.body;

    let product = await Product.create({
      name,
      price,
      description,
      address,
    });
    // console.log(product);
    console.log("product created successfuly");
    res.status(201).json({ product });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/delete/:productid", async (req, res) => {
  try {
    let { productid } = req.params;
    const product = await Product.findById(productid);
    if (product) {
      await product.remove();
      res.status(200).json({ message: "Product removed successfully" });
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/search", async (req, res) => {
  try {
    let query = {};
    const { name, address } = req.query;
    if (name) {
      query.name = { $regex: name, $options: "i" };
    }
    if (address) {
      query.address = { $regex: address, $options: "i" };
    }
    const searchedProducts = await Product.find(query);
    res.json(searchedProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
});
export const productRouter = router;
