const Event = require("../models/Event");

exports.create_event = async function (req, res) {
  const newEvent = await Event.create({
    title: req.body.event.title,
    description: req.body.event.description,
  });
  try {
    res.send(newEvent);
  } catch {
    res.status(400).send(e);
  }
};

exports.find_event_by_id = async function (req, res) {
  const foundEvent = await Event.findAll({
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
