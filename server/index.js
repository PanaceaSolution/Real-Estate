import express from 'express'
import router from './routes/imageRoutes.js';
const app=express();

app.use('/', router);
app.use('/uploads', express.static('uploads'));

app.listen(3000, () => console.log('Server running on port 3000'));