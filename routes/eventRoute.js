const router = require("express").Router();
const eventController = require("../controllers/eventController");
const middleware = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

function middleTest(req, res, next) {}

// CREATE EVENT
router.post("/create", middleware.verifyToken, eventController.create_event);

router.post("/test", middleware.verifyToken, (req, res) => {
  console.log(res.locals.user);
  res.send("success");
});

// FIND EVENT BY ID
router.post("/find", eventController.find_event_by_id);

module.exports = router;
