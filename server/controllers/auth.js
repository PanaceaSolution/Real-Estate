import { User } from '../models/user.js';
import { StatusCodes } from 'http-status-codes';
import { tokenToResponse } from '../utils/jwt.js';


export const register = async (req, res) => {
  const { email, name, lastName, password } = req.body;

  if (!name || !lastName || !email || !password) {
  return res
    .status(StatusCodes.BAD_REQUEST)
    .json({ msg: "Please fill in all the required fields" });

  }

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Email already exists" });
  }

  const user = await User.create({ name, lastName, email, password });
  const tokenUser = { name: user.name, userId: user._id, role: user.role };

  tokenToResponse({ res, user: tokenUser });  
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Please fill in all the required fields" });
  }

  const user = await User.findOne({ email });
  if (!user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "User not found" });
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "Invalid credentials" });
  }

  const tokenUser = { name: user.name, userId: user._id, role: user.role };

  tokenToResponse({ res, user: tokenUser });  
};

export const logout = async (req, res) => {
  res.clearCookie('token', {
    path: '/',
    httpOnly: true,
    sameSite: 'none',
    secure: 'true',
  });
  res.status(StatusCodes.OK).json({ message: 'Logged out successfully' });
};