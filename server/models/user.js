const mongoose = require('mongoose')
const validator=require('validator')

const bcrypt=require('bcryptjs');



const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,'please provide name'],
        minlength:3,
        maxlength:50,
    },
    lastName: {
        type: String,
        required:[true,"lastname required"],
        minlength:3,
        maxlength: 20,
      },
      email: {
        type: String,
        required:[true,'please provide email'],
        validate: {
            validator: function(value) {
                if (value) {
                    return validator.isEmail(value);
                }
                return true; 
            },
            message: 'Please provide a valid email'
        }
    },
    password:{
        type:String,
        required:[true,'please provide password'],
    },
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
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
  
  userSchema.methods.comparePassword = async function (canditatePassword) {
    const isMatch = await bcrypt.compare(canditatePassword, this.password);
    return isMatch;
  };

const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;