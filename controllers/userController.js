const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.create_user = async function (req, res) {
  // Check existing users
  if (
    await User.findOne({
      where: {
        email: req.body.user.email,
      },
    })
  ) {
    return res.status(400).send(process.env.SECRET_KEY);
  }
  //Hash password
  const hashedPassword = await bcrypt.genSalt(10).then((salt) => {
    return bcrypt.hash(req.body.user.password, salt);
  });
  //Add new user to database
  const newUser = await User.create({
    first_name: req.body.user.first_name,
    last_name: req.body.user.last_name,
    email: req.body.user.email,
    password: hashedPassword,
  });
  try {
    res.send(newUser);
  } catch {
    res.sendStatus(400).send(e);
  }
};

exports.login_user = async function (req, res) {
  const foundUser = User.findOne({
    where: {
      id: req.body.id,
    },
  });
  try {
    res.send(foundUser);
  } catch {
    res.status(400).send("error");
  }
};
