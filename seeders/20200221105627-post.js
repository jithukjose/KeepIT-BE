'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('posts', [
      {
        userId: 1,
        title:
          ' sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'occaecati excepturi optio reprehenderi',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts', null, {})
  }
}
