import express from 'express';
const router = express.Router();

import { createProduct } from '../controllers/controllers.js';

router.post('/create-product', createProduct);


export default router;
