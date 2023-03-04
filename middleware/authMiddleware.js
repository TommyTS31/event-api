const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.verifyToken = async function (req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(401).send("No token");
  }

  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findOne({
      where: {
        id: verify.id,
      },
    });
    res.locals.user = user;
  } catch (err) {
    res.status(401).send("Invalid Token");
  }
  next();
};
