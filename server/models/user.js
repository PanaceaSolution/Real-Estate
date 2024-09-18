import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  profilePic: {
    "type":"String"

  },
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minlength: 3,
    maxlength: 50,
  },
  lastName: {
    type: String,
    required: [true, 'Last name required'],
    minlength: 3,
    maxlength: 20,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: function (value) {
        if (value) {
          return validator.isEmail(value);
        }
        return true;
      },
      message: 'Please provide a valid email',
    },
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  isActive: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
};

export const User = mongoose.model('User', userSchema);
