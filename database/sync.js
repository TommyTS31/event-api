const Event = require("../models/Event");
const User = require("../models/User");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");

database
  .sync()
  .then((result) => {
    console.log("Synced successfully");
  })
  .catch((err) => {
    console.log(err);
  });
