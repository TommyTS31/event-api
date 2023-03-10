const Event = require("../models/Event");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");
const Attendee = require("../models/Attendees");
const User = require("../models/User");

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
    include: [
      { model: Tag, attributes: ["id", "name"] },
      { model: User, attributes: { exclude: ["password"] }, as: "creator" },
    ],
  });
  console.log(foundEvent);
  try {
    res.send(foundEvent);
  } catch {
    res.status(400).send("error");
  }
};

exports.get_all_events = async function (req, res) {
  try {
    const allEvents = await Event.findAll({ include: Tag });
    res.send(allEvents);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.register_user_to_event = async function (req, res) {
  try {
    const registered = await Attendee.create();
    await registered.setEvent(req.body.event_id);
    await registered.setUser(res.locals.user.id);
    res.send(registered);
  } catch (err) {
    res.status(401).send(err);
  }
};

exports.find_all_events_by_user_id = async function (req, res) {
  const foundEvent = await Event.findAll({
    where: {
      creator_id: res.locals.user.id,
    },
    include: User,
  });
  res.send(foundEvent);
};

exports.get_attendees_for_user_events = async function (req, res) {
  const attendees = await Attendee.findAll({
    include: [
      {
        model: Event,
        attributes: ["id", "title"],
        where: {
          creator_id: res.locals.user.id,
        },
      },
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
    ],
  });
  res.send(attendees);
};
