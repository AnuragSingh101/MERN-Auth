const { hashPassword, comparePassword } = require("../helpers/auth");
const User = require("../models/user");
const bcrytp = require("bcrypt");
// const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("text is working");
};

// reagister controller
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // check if username is entered
    if (!username) {
      return res.json({
        error: "username is not define",
      });
    }
    // check password lenght
    if (!password || password.lenght < 6) {
      return res.json({
        error: "Password is require or pasword should me atlest 6 charecter",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is already taken ",
      });
    }

    // hashing password
    const hashedPassword = await hashPassword(password);
    // creating a new user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

// login route controller
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        error: "no user found ",
      });
    }

    // check hash password with normal password
    const match = await comparePassword(password, user.password);
    if (match) {
      jwt.sign(
        { email: user.email, id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(user);
        }
      );
    }
    if (!match) {
      res.json({
        error: "password does not match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if (err) throw err;
      res.json(user);
    });
  } else {
    res.json(null);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
};
