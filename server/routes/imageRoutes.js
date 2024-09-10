import express from 'express';
import { uploadImage, updateImage, deleteImage, uploadMiddleware } from '../controllers/imageController.js';

const router = express.Router();

// Route to upload an image
router.post('/upload', uploadMiddleware, uploadImage);

// Route to update an image
router.put('/update', uploadMiddleware, updateImage);

// Route to delete an image
router.delete('/delete', deleteImage);

export default router;
