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

const editUser = (req) => {
  // let user = {
  //   name: DB.name,
  //   email: DB.email,
  //   street: req.body.street,
  //   city: req.body.city
  // }

  return DB.users.findByPk(req.params.userId).then((result) => {
    console.log(result.dataValue, 'ewa')
    if (result) {
      return DB.users
        .update(
          {
            name: req.body.name,
            email: req.body.email,
            street: req.body.street,
            city: req.body.city
          },
          { where: { id: req.params.userId } }
        )
        .then(() => DB.users.findByPk(req.params.userId))
    } else {
      res.send(404)
    }
  })
  // user = await DB.users.update(user.body)
  // return user

  // Book.update(
  //   {title: req.body.title},
  //   {where: req.params.bookId}
  // )
}

module.exports = {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser,
  editUser
}
