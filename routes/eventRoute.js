const router = require("express").Router();
const eventController = require("../controllers/eventController");
const middleware = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");

// CREATE EVENT
router.post("/create", middleware.verifyToken, eventController.create_event);

// FIND EVENT BY ID
router.post("/find", eventController.find_event_by_id);

// GET ALL CREATOR EVENTS
router.post(
  "/find_all_by_user",
  middleware.verifyToken,
  eventController.find_all_events_by_user_id
);

// REGISTER USER TO EVENT
router.post(
  "/register_user",
  middleware.verifyToken,
  eventController.register_user_to_event
);

// REGISTER USER TO EVENT
router.post(
  "/find_attendees_for_creator",
  middleware.verifyToken,
  eventController.get_attendees_for_user_events
);

module.exports = router;
