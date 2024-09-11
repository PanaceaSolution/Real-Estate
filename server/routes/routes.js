import express from "express";
const router = express.Router();

import { createProduct, updateProduct } from "../controllers/controllers.js";
import { upload } from "../middlewares/upload.js";

router.post("/create-product", upload.single("image"), createProduct);
router.post("/update-product/:id", updateProduct);

export default router;
