const Event = require("../models/Event");

exports.create_event = async function (req, res) {
  const newEvent = Event.create({
    title: req.body.event.title,
    description: req.body.event.description,
  });
  try {
    res.send("Successfully added new event to database");
  } catch {
    res.status(400).send(e);
  }
};

exports.find_event_by_id = async function (req, res) {
  const foundEvent = Event.findAll({
    where: {
      id: req.body.id,
    },
  });
  try {
    res.send(foundEvent);
  } catch {
    res.status(400).send("error");
  }
};
