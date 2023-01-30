const express = require("express");
const event = require("./eventsRoute");

module.exports = function (app) {
  app.use(express.json());

  app.use("/events", event);
};
