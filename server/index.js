import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';
import { authRouter } from './routes/auth.js';

dotenv.config();
import router from './routes/imageRoutes.js';



const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/', router);


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
