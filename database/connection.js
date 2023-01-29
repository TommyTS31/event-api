const Sequelize = require("sequelize");

const database = new Sequelize("event_database", "tommy", "default", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = database;
global.database = database;
