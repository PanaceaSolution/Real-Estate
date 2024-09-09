const express = require('express');
require('dotenv').config(); 

const connectDB = require('./db/connect');

const app=express();

app.use(express.json());

const authRouter = require('./routes/auth');

app.use('/api/v1/auth', authRouter);

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
