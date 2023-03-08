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
    date_created: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  { timestamps: false }
);

module.exports = Attendees;
