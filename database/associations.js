const Event = require("../models/Event");
const User = require("../models/User");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");
const Attendee = require("../models/Attendees");
const { Op } = require("sequelize");

// Event - Tag relationship many to many
Event.belongsToMany(Tag, { through: "event_tag", foreignKey: "event_id" });
Tag.belongsToMany(Event, { through: "event_tag", foreignKey: "tag_id" });

// Event - User relationship many to many
Event.belongsToMany(User, {
  through: Attendee,
  foreignKey: "event_id",
  otherKey: "user_id",
});
User.belongsToMany(Event, {
  through: Attendee,
  foreignKey: "user_id",
  otherKey: "event_id",
});

// Attendee model
Attendee.belongsTo(Event, { foreignKey: "event_id" });
Attendee.belongsTo(User, { foreignKey: "user_id" });

// User - Event relationship One to Many
User.hasMany(Event, { foreignKey: "creator_id" });
Event.belongsTo(User, { foreignKey: "creator_id", as: "creator" });

async function test() {
  const attendees = await Attendee.count({
    include: [
      {
        model: Event,
        attributes: ["id"],
        where: {
          creator_id: 1,
        },
      },
      {
        model: User,
        attributes: ["id"],
      },
    ],
  });

  console.log(attendees);
}
