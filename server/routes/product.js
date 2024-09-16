import express from "express";
const router = express.Router();
import { authentication } from "../middlewares/authentication.js";
import {
    upload,
    uploadImage,
    updateImage,
    deleteImage,
  } from "../controllers/imageController.js";
import { createProduct, updateProduct,deleteProduct ,searchProduct, getallProducts,getSingleProduct,getMyProducts} from "../controllers/productController.js";


router.get("/", getallProducts);
router.get("/myproducts",authentication, getMyProducts);
router.get("/:id", getSingleProduct);
router.post("/create",authentication, upload.single("image"),uploadImage, createProduct);
router.patch("/update/:id",authentication,upload.single("image"), updateImage, updateProduct);
router.post("/search", searchProduct);
router.delete("/delete/:id",authentication, deleteImage,deleteProduct);

export const productRouter = router;
