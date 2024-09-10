import express from "express";
const router = express.Router();

import { createProduct, updateProduct } from "../controllers/controllers.js";

router.post("/create-product", createProduct);
router.post("/update-product/:id", updateProduct);

export default router;
