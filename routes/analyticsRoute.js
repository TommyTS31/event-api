const router = require("express").Router();
const middleware = require("../middleware/authMiddleware");
const analytics = require("../controllers/analyticsController");

// CREATE EVENT
router.get(
  "/dashboard_statistics",
  middleware.verifyToken,
  analytics.dashboard_statistics
);

module.exports = router;
