import express from 'express';
import router from './routes/routes.js';
import { connectMongoDB } from './connection.js';

const app = express();
app.use(express.urlencoded({ extended: true }));

connectMongoDB('mongodb://127.0.0.1:27017/real-estate')

app.use('/', router);

app.listen(3000, () => console.log('Server running on port 3000'));