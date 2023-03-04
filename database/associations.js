const Event = require("../models/Event");
const User = require("../models/User");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");
const Attendees = require("../models/Attendees");
const { Op } = require("sequelize");

// Event - Tag relationship many to many
Event.belongsToMany(Tag, { through: "event_tag", foreignKey: "event_id" });
Tag.belongsToMany(Event, { through: "event_tag", foreignKey: "tag_id" });

// Event - User relationship many to many
Event.belongsToMany(User, { through: "attendee", foreignKey: "event_id" });
User.belongsToMany(Event, { through: "attendee", foreignKey: "user_id" });

// User - Event relationship One to Many
User.hasMany(Event, { foreignKey: "creator_id" });
Event.hasOne(User, { foreignKey: "id" });

async function test() {
  const similarTags = await Event.findAll({
    where: {
      id: 21,
    },
    include: User,
  });
  console.log(similarTags[0].users);
}
