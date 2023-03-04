const Sequelize = require("sequelize");

const database = new Sequelize("event_database", "tommy", "tommy", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = database;
global.database = database;
