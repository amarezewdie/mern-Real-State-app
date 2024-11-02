const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "user already exist" });
    }
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashPassword,
    });
    
  if(newUser){
    return res.status(400).json({msg:'user created successfully'});
  }

  } catch (error) {
    return res.status(500).json({msg:error.message});
  }
};

module.exports = { signup };
