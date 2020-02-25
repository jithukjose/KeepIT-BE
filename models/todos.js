'use strict'
module.exports = (sequelize, DataTypes) => {
  const todos = sequelize.define(
    'todos',
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      completed: {
        type: DataTypes.BOOLEAN
      }
    },
    { timestamps: true, paranoid: true }
  )
  todos.associate = function(models) {
    // associations can be defined here
  }
  return todos
}
