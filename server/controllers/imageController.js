import multer from 'multer';
import cloudinary from '../config/cloudinary.js'; // Add this import for handling Cloudinary operations

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
        console.error('Cloudinary Upload Error:', error);
        return res.status(500).json({ message: 'Failed to upload image to Cloudinary', error });
      }

      res.status(200).json({ message: 'Image uploaded successfully', url: result.secure_url, public_id: result.public_id });
    }).end(file.buffer);
  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({ message: 'An error occurred during the upload', error });
  }
};

export const updateImage = async (req, res) => {
  try {
    const { public_id } = req.body; // Assuming the client sends the public_id of the current image
    const file = req.file; // Get the new file to replace the old one

    if (!file) {
      return res.status(400).json({ message: 'No new file uploaded' });
    }

    // First, delete the existing image using its public_id
    cloudinary.uploader.destroy(public_id, (error, result) => {
      if (error) {
        console.error('Cloudinary Deletion Error:', error);
        return res.status(500).json({ message: 'Failed to delete the previous image from Cloudinary', error });
      }

      // After deleting, upload the new image
      cloudinary.uploader.upload_stream({ 
        folder: 'real',
        resource_type: 'image',
      }, (error, result) => {
        if (error) {
          console.error('Cloudinary Upload Error:', error);
          return res.status(500).json({ message: 'Failed to upload new image to Cloudinary', error });
        }

        res.status(200).json({ message: 'Image updated successfully', url: result.secure_url, public_id: result.public_id });
      }).end(file.buffer);
    });
  } catch (error) {
    console.error('Update Error:', error);
    res.status(500).json({ message: 'An error occurred during the update', error });
  }
};

export const deleteImage = async (req, res) => {
  try {
    const { public_id } = req.body; // Assuming the client sends the public_id of the image to be deleted

    if (!public_id) {
      return res.status(400).json({ message: 'No public_id provided' });
    }

    // Delete the image from Cloudinary using its public_id
    cloudinary.uploader.destroy(public_id, (error, result) => {
      if (error) {
        console.error('Cloudinary Deletion Error:', error);
        return res.status(500).json({ message: 'Failed to delete image from Cloudinary', error });
      }

      res.status(200).json({ message: 'Image deleted successfully' });
    });
  } catch (error) {
    console.error('Deletion Error:', error);
    res.status(500).json({ message: 'An error occurred during the deletion', error });
  }
};

// Multer middleware for handling image uploads
export const uploadMiddleware = upload.single('image');