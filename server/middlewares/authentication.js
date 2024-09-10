import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../errors/Unauthenticated.js';

export const authentication = async (req, res, next) => {
  
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication invalid');
  }
  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: payload.userId};
    next();
  } catch (error) {
    throw new UnauthenticatedError('Authentication invalid');
  }
};

