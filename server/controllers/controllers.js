import { Product } from "../models/product.js";

export async function createProduct(req, res) {
  const body = req.body;
  if (!body || !body.name || !body.price) {
    return res.status(400).json({ msg: "all fields are required" });
  }
  try {
    const productResult = await Product.create({
      name: body.name,
      price: body.price,
      description: body.description,
      imageUrl: body.imageUrl,
    });
    return res
      .status(201)
      .json({ msg: "product created successfully", productResult });
  } catch (err) {
    console.log("error creating product", err);
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const { updatedName, updatedDescription, updatedPrice, updatedImageUrl } =
    req.body;

  try {
    const update = await Product.updateOne(
      { _id: id },
      {
        $set: {
          name: updatedName,
          description: updatedDescription,
          price: updatedPrice,
          imageUrl: updatedImageUrl,
        },
      }
    );
    if (update.matchedCount === 0) {
      return res.status(404).json({ msg: "Product not found" });
    } else if (update.modifiedCount === 0) {
      return res.status(400).json({ msg: "No changes made to the product" });
    } else {
      return res
        .status(200)
        .json({ msg: "Product updated successfully", update });
    }
  } catch (err) {
    console.log("error updating the data", err);
  }
}
