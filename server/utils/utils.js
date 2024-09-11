import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRET , // Ensure this is defined in your .env file
    { expiresIn: '1h' }
  );
  return token;
};
