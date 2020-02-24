'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('todos', [
      {
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        completed: 'false',

        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('todos', null, {})
  }
}
