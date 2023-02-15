const Sequelize = require("sequelize");

const Event = database.define(
  "event",
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: Sequelize.STRING(300),
    description: Sequelize.STRING(900),
    date: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    time: {
      type: Sequelize.TIME,
      allowNull: true,
    },
    location: {
      type: Sequelize.STRING(300),
      allowNull: true,
    },
    creator_id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Event;
