import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';
import { authRouter } from './routes/auth.js';
import profileRouter from './routes/userProfileRoutes.js'; // Import the profile routes

dotenv.config();
import imageRouter from './routes/imageRoutes.js'; // Image route import


const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter); // Authentication routes
app.use('/api/v1/', profileRouter); // Profile routes mounted here
app.use('/api/v1/images', imageRouter); // Image routes



const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGOO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
