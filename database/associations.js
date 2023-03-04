const Event = require("../models/Event");
const User = require("../models/User");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");
const { Op } = require("sequelize");

// Event - Tag relationship many to many
Event.belongsToMany(Tag, { through: "event_tag", foreignKey: "event_id" });
Tag.belongsToMany(Event, { through: "event_tag", foreignKey: "tag_id" });

// User - Event relationship One to Many
User.hasMany(Event, { foreignKey: "creator_id" });
Event.hasOne(User, { foreignKey: "id" });

async function test() {
  const similarTags = await Tag.findAll({
    where: {
      name: {
        [Op.like]: "%po%",
      },
    },
    limit: 3,
  });
  console.log(similarTags);
}

test();
