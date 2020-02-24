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
  console.log(user)
  return user
}

const getUsersWithId = (req) => {
  return DB.users.findByPk(req.params.userId).then((result) => {
    if (!result) {
      console.log('Not found!')
    } else {
      return result
    }
  })
}

// const deleteUser = (req) => {
//   for (let i = 0; i < users.length; i++) {
//     if (req.params.userId == users[i].id);
//     users.splice(users[i].id, 1)
//   }
//   return 'sucess'
// }

const deleteUser = (req) => {
  DB.users.destroy({
    where: {
      id: req.params.userId
    }
  })
  return 'Deleted'
}

module.exports = {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser
}
