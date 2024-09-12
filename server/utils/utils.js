import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  const token = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.JWT_SECRECT // Ensure this is defined in your .env file
  );
  return token;
};
