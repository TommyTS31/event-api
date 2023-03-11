const express = require("express");
const event = require("./eventRoute");
const tag = require("./tagRoute");
const auth = require("./userRoute");
const analytics = require("./analyticsRoute");

//All routes are set up in this file to keep server.js cleaner with less lines of code.
module.exports = function (app) {
  app.use(express.json());

  app.use("/auth", auth);
  app.use("/events", event);
  app.use("/tags", tag);
  app.use("/analytics", analytics);
};
