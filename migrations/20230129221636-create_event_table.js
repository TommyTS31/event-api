"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: Sequelize.STRING(300),
      description: Sequelize.STRING(900),
      date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING(300),
        allowNull: true,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("events");
  },
};
