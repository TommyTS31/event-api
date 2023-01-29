const Sequelize = require("sequelize");

module.exports = database.define("Event", {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING(300),
});
