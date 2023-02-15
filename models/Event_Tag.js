const Sequelize = require("sequelize");

const Event_Tag = database.define(
  "event_tag",
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: { type: Sequelize.INTEGER(11), allowNull: false },
    tag_id: { type: Sequelize.INTEGER(11), allowNull: false },
  },
  { timestamps: false }
);

module.exports = Event_Tag;
