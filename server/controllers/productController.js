import { Product } from "../models/product.js";

export async function createProduct(req, res) {
  const body = req.body;
  const imageFile = req.file;
  if (!body || !body.name || !body.price) {
    return res.status(400).json({ msg: "all fields are required" });
  }
  try {
    const productResult = await Product.create({
      name: body.name,
      price: body.price,
      description: body.description,
      address:body.address,
      imageUrl: imageFile
        ? {
            data: imageFile.buffer,
            contentType: imageFile.mimetype,
          }
        : undefined,
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
  const { name, description, price, address,imageUrl } = req.body;

  try {
    const update = await Product.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          description: description,
          price: price,
          address: address,
          imageUrl: imageUrl,
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
