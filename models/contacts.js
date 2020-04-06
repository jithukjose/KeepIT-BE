'use strict'
module.exports = (sequelize, DataTypes) => {
  const contacts = sequelize.define(
    'contacts',
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
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
    },
    { timestamps: true, paranoid: true }
  )
  contacts.associate = function (models) {
    // associations can be defined here
  }
  return contacts
}
