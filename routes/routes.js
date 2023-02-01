const express = require("express");
const event = require("./eventsRoute");

//All routes are set up in this file to keep server.js cleaner with less lines of code.
module.exports = function (app) {
  app.use(express.json());

  app.use("/events", event);
};
