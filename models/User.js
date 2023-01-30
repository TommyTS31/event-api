const Sequelize = require("sequelize");

module.exports = database.define(
  "User",
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: Sequelize.STRING(100),
    last_name: Sequelize.STRING(100),
    email: Sequelize.STRING(100),
    password: Sequelize.STRING(300),
  },
  { timestamps: false }
);
