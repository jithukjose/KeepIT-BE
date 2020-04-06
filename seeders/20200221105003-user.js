'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: ' manu',
        email: 'example@example.com',
        street: 'RedWood',
        city: 'London',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: ' jerry',
        email: 'jerry@gmail.com',
        street: 'Hawdka',
        city: 'Canada',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
}
