const Sequelize = require("sequelize");

const Tag = database.define(
  "tag",
  {
    id: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: Sequelize.STRING(300),
  },
  { timestamps: false }
);

module.exports = Tag;
