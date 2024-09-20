import mongoose from 'mongoose';

mongoose.set('strictQuery', true);

export const connectDB = (url) => {
  return mongoose.connect(url);
};
