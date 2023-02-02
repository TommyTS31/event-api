const router = require("express").Router();
const userController = require("../controllers/userController");

// REGISTER ROUTE
router.post("/register", userController.create_user);

router.post("/login", userController.login_user);

module.exports = router;
