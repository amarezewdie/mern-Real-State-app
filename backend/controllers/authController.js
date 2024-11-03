const customError = require("../customError");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw new customError("all filed is required", 400);
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

    return res.status(201).json({ msg: "user created successfully" });
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new customError("All fields are required", 400);
    }

    //check user exist
    const validUser = await User.findOne({ email });
    if (!validUser) {
      throw new customError("Invalid email or password", 401);
    }
    //check password match
    const matchPassword = await bcrypt.compare(password, validUser.password);
    if (!matchPassword) {
      throw new customError("Invalid email or password", 401);
    }
    //sign the token
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET,{expiresIn:'1h'});
    //destructure the password and rename
    const {password:userPassword,...userData}=validUser.toObject()
    res
      .cookie("AccessToken", token, { httpOnly: true })
      .status(200)
      .json(userData);
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signIn };
