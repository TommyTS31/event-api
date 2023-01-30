const Sequelize = require("sequelize");

module.exports = database.define(
  "Event",
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
  },
  { timestamps: false }
);
