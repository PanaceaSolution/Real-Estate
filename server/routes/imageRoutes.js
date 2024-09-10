import express from 'express';
import { uploadImage, uploadMiddleware } from '../controllers/imageController.js'; // Import the necessary functions

const router = express.Router();

// Define a POST route for the "/upload" endpoint, using the uploadMiddleware
router.post('/upload', uploadMiddleware, uploadImage);

export default router;
