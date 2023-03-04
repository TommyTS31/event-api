const Sequelize = require("sequelize");

const Attendees = database.define(
  "attendee",
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: { type: Sequelize.INTEGER(11), allowNull: false },
    user_id: { type: Sequelize.INTEGER(11), allowNull: false },
  },
  { timestamps: false }
);

module.exports = Attendees;
