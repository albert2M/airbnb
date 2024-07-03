'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('properties', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      hostId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      hostSince: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      hostName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      hostLocation: {
        type: Sequelize.STRING,
        allowNull: false
      },
      neighburhood: {
        type: Sequelize.STRING,
        allowNull: false
      },
      roomType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      bedrooms: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      beds: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      numberOfReviews: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability30: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability60: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability90: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availability365: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
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

// para lanzar o borrar ablas "migraciones": https://sequelize.org/docs/v6/other-topics/migrations/