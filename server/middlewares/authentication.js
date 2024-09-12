import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = { id: decoded.userId ,name: decoded.name,role:decoded.role}; 
    next();
  } catch (error) {
    res.status(401).json({ message: 'Not authorized, token failed' });
  }
};