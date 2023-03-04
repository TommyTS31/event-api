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
    return res
      .status(400)
      .send("A user with the same email address already exists");
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
  // Finds the user
  const user = await User.findOne({
    where: {
      email: req.body.user.email,
    },
  });
  if (!user) {
    return res.send("Wrong email or password");
  }
  // Checks password validity, creates and sends signed JWT
  bcrypt.compare(req.body.user.password, user.password, function (err, result) {
    if (result) {
      authToken = jwt.sign(
        { id: user.id, email: user.email },
        process.env.SECRET_KEY,
        {
          expiresIn: "1800s",
        }
      );
      return res.status(200).json({ token: authToken });
    }
    if (err) {
      return res.status(400).send("Something went wrong");
    } else {
      return res.send("Wrong email or password");
    }
  });
};

exports.find_user_by_id = async function (req, res) {
  const user = await User.findOne({
    where: {
      id: req.body.user.id,
    },
  });
  res.send(user);
};
