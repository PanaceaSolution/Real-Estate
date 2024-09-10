import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/connect.js';
import { authRouter } from './routes/auth.js';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(express.json());

app.use(helmet()); // sets various HTTP headers to secure your app
app.use(xss()); // protects against crosssite scripting (xxs) attacks
app.use(mongoSanitize()); // prevents mongoDB noSQL Injection attacks
app.use(cors()); // enable cross origin Resource Sharing

// route
app.use('/api/v1/auth', authRouter);

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
