const DB = require('../../models');


var bcrypt = require('bcryptjs');



const getUsers = async (req) => {

  let query = {
    limit: req.query.limit || 10,
    page: req.query.page || 1,
    sortKey: req.query.sortKey || 'name',
    sortOrder: req.query.sortOrder || 'asc'
  }
  let users = await DB.users.findAndCountAll({
    offset: query.limit * (query.page - 1),
    limit: query.limit,
    order: [[query.sortKey, query.sortOrder]]
  })

  return {
    metaData: {
      page: query.page,
      perPage: query.limit,
      totalCount: users.count,
      totalPage: Math.ceil(users.count / query.limit),
      sortKey: query.sortKey,
      sortOrder: query.sortOrder,

    },
    records: users.rows
  };


}


const postUsers = async (req) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  let user = {
    name: req.body.name,
    password: hash,
    email: req.body.email,
    street: req.body.street,
    city: req.body.city,
  };

  user = await DB.users.create(user).then((dbUser) => {
    return DB.users.findByPk(dbUser.id)
  });
  return user;
};

const getUsersWithId = (req) => DB.users.findByPk(req.params.userId).then((result) => {
  if (!result) {
    throw new Error('Not Found!!');
  } else {
    return result;
  }
});

const deleteUser = async (req) => {
  await DB.users.destroy({
    where: {
      id: req.params.userId,
    },
  });
};

const editUser = (req) => DB.users.findByPk(req.params.userId).then((result) => {
  if (!result) {
    throw new Error('Not FOund');
  }
  return result.update(
    {
      name: req.body.name,
      // email: req.body.email,
      street: req.body.street,
      city: req.body.city,
    },
    // { returning: true }
  );
});

module.exports = {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser,
  editUser,
};