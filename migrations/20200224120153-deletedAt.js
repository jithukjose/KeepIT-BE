'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'deletedAt', {
      type: Sequelize.DataTypes.DATE
    })
    await queryInterface.addColumn('posts', 'deletedAt', {
      type: Sequelize.DataTypes.DATE
    })
    await queryInterface.addColumn('todos', 'deletedAt', {
      type: Sequelize.DataTypes.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('users', 'deletedAt')
    await queryInterface.removeColumn('posts', 'deletedAt')
    await queryInterface.removeColumn('todos', 'deletedAt')
  }
}
