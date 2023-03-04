const router = require("express").Router();
const tagController = require("../controllers/tagController");

// SEARCH TAGS
router.post("/search", tagController.search_tags);

module.exports = router;
