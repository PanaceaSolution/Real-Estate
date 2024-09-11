import { User } from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/utils.js";

export const register = async (req, res) => {
  const { email, name, lastName, password } = req.body;
  console.log("heyyy");

  if (!name || !lastName || !email || !password) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message:
        "Please provide all required fields: name, lastName, email, password.",
    });
  }

  const emailAlreadyExists = await User.findOne({ email });
  if (emailAlreadyExists) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Email already exists" });
  }

  const user = await User.create({
    name,
    lastName,
    email,
    password,
  });

  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(StatusCodes.BAD_REQUEST).json({
        message: "Please provide email and password",
      });
    }

    let user = await User.findOne({ email: email });
    if (!user) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Invalid email or password",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        message: "Invalid email or password",
      });
    }
    const token = generateToken(user);

    res.cookie('token', token , {
      httOnly: true,
      sameSite :'none',
      secure: true,
    })
    res.status(StatusCodes.OK).json({
      message: "Sucessfully logged in",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500),
      json({
        error: error.message,
      });
  }
};

export const logout = async (req, res) => {
  console.log("helo");
  res.clearCookie("token",{

    path:"/",
    httOnly:true,
    sameSite:"none",
    secure: true,
  });
  res.status(StatusCodes.OK).json({
    message : "Logged out sucessfull",
  })
};
