import express from 'express'; // Import the express module to create a web server and define routes.
import { uploadImage } from '../controllers/imageController.js'; // Import the uploadImage function from the imageController file.

// Create a new router object to define our routes.
const router = express.Router();

// Define a POST route for the "/upload" endpoint. This route will handle image uploads.
router.post('/upload', uploadImage);

// Export the router object so it can be used in other parts of the application.
export default router;
