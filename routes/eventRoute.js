const router = require("express").Router();
const eventController = require("../controllers/eventController");
const middleware = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

function middleTest(req, res, next) {}

// CREATE EVENT
router.post("/create", middleware.verifyToken, eventController.create_event);

// FIND EVENT BY ID
router.post("/find", eventController.find_event_by_id);

module.exports = router;
