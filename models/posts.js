'use strict'
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define(
    'posts',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    { timestamps: true, paranoid: true }
  )
  posts.associate = function(models) {
    // associations can be defined here
  }
  return posts
}
