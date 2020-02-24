'use strict'
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      street: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { timestamps: true, paranoid: true }
  )
  users.associate = function(models) {
    // associations can be defined here
  }
  return users
}
