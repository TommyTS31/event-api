const Event = require("../models/Event");
const User = require("../models/User");
const Tag = require("../models/Tag");

Event.hasMany(Tag);
