const router = require("express").Router();
const eventController = require("../controllers/eventController");

// CREATE EVENT
router.post("/create", eventController.create_event);

// FIND EVENT BY ID
router.get("/find", eventController.find_event_by_id);

module.exports = router;
