const sequelize = require('sequelize');

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('addresses', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,

    },
    user_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      OnDelete: 'CASCADE',
    },
    zipcode: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    street: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    number: {
      type: Sequelize.INTEGER,
      allowNull: false,

    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),

  down: (queryInterface) => queryInterface.dropTable('addresses'),
};
