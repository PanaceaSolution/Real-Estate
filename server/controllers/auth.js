import { User } from '../models/user.js';
import { StatusCodes } from 'http-status-codes';
import { createJWT } from '../utils/jwt.js';
import { 
  CustomError,
  UnauthenticatedError,
  NotFoundError,
  BadRequestError, } from '../errors/index.js';



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
  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  const token = createJWT({ payload: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser, token });

};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Invalid email or password"); // Use 'new' here
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid user"); // Use 'new' here
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid password"); // Use 'new' here
  }



  const tokenUser = { name: user.name, userId: user._id, role: user.role };
  const token = createJWT({ payload: tokenUser });
  res.status(StatusCodes.CREATED).json({ user: tokenUser, token });
};




export const logout = async (req, res) => {

};