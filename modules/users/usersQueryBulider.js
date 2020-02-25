let DB = require('../../models')

const getUsers = async (req) => {
  return DB.users.findAll()
}

const postUsers = async (req) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    street: req.body.street,
    city: req.body.city
  }
  user = await DB.users.create(user)
  return user
}

const getUsersWithId = (req) => {
  return DB.users.findByPk(req.params.userId).then((result) => {
    if (!result) {
      throw new Error('Not Found!!')
    } else {
      return result
    }
  })
}

const deleteUser = async (req) => {
  await DB.users.destroy({
    where: {
      id: req.params.userId
    }
  })
}

module.exports = {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser
}
