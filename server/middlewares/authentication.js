import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
  // const token = req.headers.authorization?.split(' ')[1];
   const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VrcmFqIiwidXNlcklkIjoiNjZlZTVkZmNlNDJkYTFjM2M4NzE4MDA3Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MjY4OTc2NjAsImV4cCI6MTcyNjk4NDA2MH0.bRqSUZ9PeXnQ4ABzfCnh1hNcKwEGcPI5zotvbxG2W_I"
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