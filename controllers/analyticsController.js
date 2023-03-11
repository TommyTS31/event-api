const Event = require("../models/Event");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");
const Attendee = require("../models/Attendees");
const User = require("../models/User");
const { Op } = require("sequelize");

exports.dashboard_statistics = async function (req, res) {
  const countOfAll = await Event.count({
    where: {
      creator_id: res.locals.user.id,
    },
  });

  const countOfExpired = await Event.count({
    where: {
      date: {
        [Op.lt]: Date.now(),
      },
      creator_id: res.locals.user.id,
    },
  });

  const countOfCurrent = countOfAll - countOfExpired;

  const attendeesCount = await Attendee.count({
    include: [
      {
        model: Event,
        attributes: ["id"],
        where: {
          creator_id: res.locals.user.id,
        },
      },
      {
        model: User,
        attributes: ["id"],
      },
    ],
  });

  res.send({
    all: countOfAll,
    expired: countOfExpired,
    current: countOfCurrent,
    attendees: attendeesCount,
  });
};
