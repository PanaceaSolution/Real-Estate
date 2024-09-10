import { Product } from "../models/product.js";

export async function createProduct(req, res) {
  const body = req.body;
  if (!body || !body.name || !body.price) {
    return res.status(400).json({ msg: "all fields are required"});
  }
  try {
    const productResult = await Product.create({
      name: body.name,
      price: body.price,
      imageUrl: body.imageUrl,
    });
    return res.status(201).json({msg: "product created successfully", productResult})
  } catch (err) {
    console.log("error creating product", err);
  }
}
