const Event = require("../models/Event");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");

exports.create_event = async function (req, res) {
  const newEvent = await Event.create({
    title: req.body.event.title,
    description: req.body.event.description,
    date: req.body.event.date,
    time: req.body.event.time,
    location: req.body.event.location,
    creator_id: res.locals.user.id,
  });
  try {
    res.send(newEvent);
  } catch {
    res.status(400).send(e);
  }
  console.log(req.body.selectedTags);
  for (const tag of req.body.selectedTags) {
    console.log(tag);
    let foundTag = await Tag.findOne({
      where: {
        name: tag,
      },
    });
    console.log(foundTag);
    const createdJunction = await Event_Tag.create({
      event_id: newEvent.id,
      tag_id: foundTag.id,
    });
    console.log(createdJunction);
  }
};

exports.find_event_by_id = async function (req, res) {
  const foundEvent = await Event.findOne({
    where: {
      id: req.body.id,
    },
    include: Tag,
  });
  console.log(foundEvent);
  try {
    res.send(foundEvent);
  } catch {
    res.status(400).send("error");
  }
};

exports.find_all_events_by_user_id = async function (req, res) {
  const foundEvent = await Event.findOne({
    where: {
      creator_id: res.locals.user.id,
    },
    include: Tag,
  });
};
