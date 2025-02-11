'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('properties', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      hostSince: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      hostName: {
        type: Sequelize.STRING,
        allowNull: true
      },
      hostLocation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      neighburhood: {
        type: Sequelize.STRING,
        allowNull: true
      },      
      roomType: {
        type: Sequelize.STRING,
        allowNull: true
      },      
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: true
      },      
      beds: {
        type: Sequelize.INTEGER,
        allowNull: true
      },      
      numberOfReviews: {
        type: Sequelize.INTEGER,
        allowNull: true
      },      
      availability30: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      availability60: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      availability90: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      availability365: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('properties')
  }
}