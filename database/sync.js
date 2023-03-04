const Event = require("../models/Event");
const User = require("../models/User");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");
const Attendees = require("../models/Attendees");

database
  .sync({ alter: true })
  .then((result) => {
    console.log("Synced successfully");
  })
  .catch((err) => {
    console.log(err);
  });
