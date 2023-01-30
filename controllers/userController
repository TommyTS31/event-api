const User = require("./models/User");

exports.create_user = async function (req, res) {
  const newUser = User.create({
    first_name: req.body.user.first_name,
    last_name: req.body.user.last_name,
    email: req.body.user.email,
    password: "password",
  });
  try {
    res.send(newUser);
  } catch {
    res.status(400).send(e);
  }
};

exports.find_user_by_id = async function (req, res) {
  const foundUser = User.findAll({
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
