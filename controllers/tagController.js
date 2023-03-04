const Event = require("../models/Event");
const Tag = require("../models/Tag");
const Event_Tag = require("../models/Event_Tag");
const { Op } = require("sequelize");

exports.search_tags = async function (req, res) {
  const similarTags = await Tag.findAll({
    where: {
      name: {
        [Op.like]: "%" + req.body.search + "%",
      },
    },
    limit: 6,
  });
  res.send(similarTags);
};
