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
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: true,
      paranoid: true,
      defaultScope: {
        attributes: { exclude: ['password'] }
      }
    }
  )
  users.associate = function (models) {
    // associations can be defined here
  }
  return users
}
