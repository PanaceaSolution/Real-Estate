import { User } from '../models/user.js';
import { StatusCodes } from 'http-status-codes';

export const register = async (req, res) => {
  const { email, name, lastName, password } = req.body;

  if (!name || !lastName || !email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Please provide all required fields: name, lastName, email, password.',
    });
  }

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email already exists' });
  }

  const user = await User.create({
    name,
    lastName,
    email,
    password,
  });

  res.status(StatusCodes.CREATED).json({ user });
};
