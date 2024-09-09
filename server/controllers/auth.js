const User = require('../models/user');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    const { email, name, lastName, password } = req.body;

    if (!name || !lastName || !email || !password) {
        return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Please provide all required fields: name, lastName, email, password.' });
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

module.exports = register;
