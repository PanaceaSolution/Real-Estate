import multer from 'multer'; // Importing multer for handling multipart/form-data, primarily used for file uploads.
import path from 'path'; // Importing path module for working with file paths and directories.

// The storage engine is responsible for storing the uploaded files on the local file system.
const storage = multer.diskStorage({
  destination: './uploads/', // Directory where uploaded files will be stored.
  filename: (req, file, cb) => {
    // Generating a unique filename by appending the timestamp to the original file name.
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  }
});

// Initialize upload
// Configuring multer to handle file uploads with specific settings like storage engine, file size limits, and file filtering.
const upload = multer({
  storage, // Using the disk storage engine.
  limits: { fileSize: 5 * 1024 * 1024 }, // Limiting the file size to 5MB.
  fileFilter: (req, file, cb) => {
    // Filtering files to only accept images (JPEG, PNG, GIF).
    checkFileType(file, cb);
  }
}).single('image'); // Handling a single file upload with the field name 'image'.

// Function to check if the uploaded file is an image (JPEG, PNG, GIF).
const checkFileType = (file, cb) => {
  const filetypes = /jpeg|jpg|png|gif/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true); // If file is an image, proceed with the upload.
  } else {
    cb('Error: Images Only!'); // If not, return an error.
  }
};

// Function to handle the image upload request.
export const uploadImage = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send({ message: err }); // Return error if any issues during upload.
    }
    if (!req.file) {
      return res.status(400).send({ message: 'No file selected!' }); // Return error if no file is selected.
    }
    // Return success message and file path if upload is successful.
    res.send({
      message: 'File uploaded successfully!',
      file: `uploads/${req.file.filename}`
    });
  });
};
