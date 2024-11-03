const customError = require("../customError");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signup = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
       throw new customError('all filed is required',400);
    }

    const user = await User.findOne({ email });
    if (user) {
       throw new customError("User already exists with this email", 400);
    }

    if (password.length < 6) {
      throw new customError("Password must be at least 6 characters", 400);
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });
    
    return res.status(201).json({msg:'user created successfully'});

  } catch (error) {
   next(error)
  }
};

module.exports = { signup };
