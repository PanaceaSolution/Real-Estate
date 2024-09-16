import express from 'express';
import dotenv from 'dotenv';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import cors from 'cors';



import { authentication } from './middlewares/authentication.js';
import  profileRouter  from './routes/userProfileRoutes.js';
import { authRouter } from './routes/auth.js';
import { connectDB } from './db/connect.js';
import {productRouter} from './routes/product.js';
// import imageRouter from './routes/imageRoutes.js'; 

dotenv.config();

const app = express();
app.use(express.json());

app.use(helmet()); // sets various HTTP headers to secure your app
app.use(xss()); // protects against crosssite scripting (xxs) attacks
app.use(mongoSanitize()); // prevents mongoDB noSQL Injection attacks
app.use(cors()); // enable cross origin Resource Sharing

// route
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/profile',authentication, profileRouter); // Profile routes mounted here
// app.use('/api/v1/images', imageRouter); // Image routes
app.use('/api/v1/products',productRouter)

// server start
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
