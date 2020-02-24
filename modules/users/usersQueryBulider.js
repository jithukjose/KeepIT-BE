const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      city: 'Gwenborough'
    }
  },
  {
    id: 2,
    name: 'Ervin Howell',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      city: 'Wisokyburgh'
    }
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      city: 'McKenziehaven'
    }
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      city: 'South Elvis'
    }
  }
]

const getUsers = (req) => {
  return users
}

const postUsers = (req) => {
  const userList = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      city: req.body.address.city
    }
  }
  users.push(userList)
  return userList
}

const getUsersWithId = (req) => {
  for (let i = 0; i < users.length; i++) {
    if (req.params.userId == users[i].id) {
      return users[i]
    }
  }
}

const deleteUser = (req) => {
  for (let i = 0; i < users.length; i++) {
    if (req.params.userId == users[i].id);
    users.splice(users[i].id, 1)
  }
  return 'sucess'
}

module.exports = {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser
}
