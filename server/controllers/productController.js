import { Product } from "../models/product.js";

import { StatusCodes } from "http-status-codes";

// Create Product

export async function createProduct(req, res) {
  const body = req.body;
  const image_secure_url = req.image_secure_url;
  const public_id = req.public_id;

  if (
    !body ||
    !body.name ||
    !body.price ||
    !body.description ||
    !body.address
  ) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please fill in all the required fields" });
  }

  try {
    const productResult = await Product.create({
      name: body.name,
      price: body.price,
      description: body.description,
      address: body.address,
      imageUrl: image_secure_url,
      imagePublicId: public_id,
      createdby: {
        userId: req.user.id,
        name: req.user.name,
      },
    });
    console.log(req.user.name);
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "Product created successfully", productResult });
  } catch (err) {
    return res
      .status(500)
      .json({ msg: "Internal Server Error", error: err.message });
  }
}

export async function updateProduct(req, res) {
  const { id } = req.params;
  const public_id = req.public_id;
  const image_secure_url = req.image_secure_url;
  const { name, description, price, address } = req.body;
  const userId = req.user.id;

  const product = await Product.findById(id);

  if (!product) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: "Product not found" });
  }
  if (product.createdby.userId.toString() !== userId.toString()) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ msg: "You are not authorized to update this product" });
  }
  try {
    const update = await Product.updateOne(
      { _id: id },
      {
        $set: {
          name: name,
          description: description,
          price: price,
          address: address,
          imageUrl: image_secure_url,
          imagePublicId: public_id,
        },
      }
    );

    if (update.matchedCount === 0) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ msg: "Product not found" });
    } else if (update.modifiedCount === 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "No changes made to the product" });
    }

    return res.status(StatusCodes.OK).json({
      msg: "Product updated successfully",
      product,
    });
  } catch (err) {
    console.error("Error updating the product:", err);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "Error updating the product" });
  }
}

// Delete Product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    const userId = req.user.id;
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    if (product.createdby.userId.toString() !== userId.toString()) {
      return res
        .status(401)
        .json({ msg: "You are not authorized to delete this product" });
    }
    await product.remove();
    res.status(200).json({ msg: "Product removed successfully" });
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

export const searchProduct = async (req, res) => {
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

    if (searchedProducts.length === 0) {
      return res
        .status(404)
        .json({ msg: "No products found matching the search criteria" });
    }

    res.json(searchedProducts);
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

export const getallProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

export const getMyProducts = async (req, res) => {
  try {
    const userId = req.user.id;
    console.log(userId);

    const products = await Product.find({ "createdby.userId": userId });
    if (products.length === 0) {
      return res.status(200).json({ msg: "You have no posts yet" });
    }

    res.json(products);
  } catch (err) {
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};
