import jwt from 'jsonwebtoken';

export const authentication = (req, res, next) => {
  // const token = req.headers.authorization?.split(' ')[1];
   const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3VrcmFqIiwidXNlcklkIjoiNjZlZDBhYzk5YzEzYzRiOTk0MzNmYWU3Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE3MjY4MTA4MjUsImV4cCI6MTcyNjg5NzIyNX0.tTQxqv0mjRVOQwwy1tvr3cTleD9oibTdBY1AGfpUdEI"
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