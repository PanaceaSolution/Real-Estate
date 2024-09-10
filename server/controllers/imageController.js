import multer from 'multer';
import cloudinary from '../config/cloudinary.js'; // Add this import for handling streams

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadImage = async (req, res) => {
  try {
    const file = req.file; // Get the file from the request

    if (!file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    // Upload the image to Cloudinary
    cloudinary.uploader.upload_stream({ 
      folder: 'real',
      resource_type: 'image',
    }, (error, result) => {
      if (error) {
        console.error('Cloudinary Upload Error:', error); // Log the error for debugging
        return res.status(500).json({ message: 'Failed to upload image to Cloudinary', error });
      }

      res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url });
    }).end(file.buffer); // Pass the file buffer to Cloudinary's upload stream
  } catch (error) {
    console.error('Upload Error:', error); // Log the error for debugging
    res.status(500).json({ message: 'An error occurred during the upload', error });
  }
};

export const uploadMiddleware = upload.single('image');
