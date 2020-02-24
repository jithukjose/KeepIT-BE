var HttpStatus = require('http-status-codes')
const userQueryBuilder = require('./usersQueryBulider')

const getUsers = (req, res, next) => {
  try {
    const getUsersResponse = userQueryBuilder.getUsers(req)
    res.status(HttpStatus.OK).send(getUsersResponse)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const postUsers = (req, res, next) => {
  try {
    const postUsersResponse = userQueryBuilder.postUsers(req)
    res.status(HttpStatus.CREATED).send(postUsersResponse)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: ErrorEvent.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const getUsersWithId = (req, res) => {
  try {
    const getSingleUser = userQueryBuilder.getUsersWithId(req)
    res.status(HttpStatus.ACCEPTED).send(getSingleUser)
  } catch (error) {
    console.log(error)
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const deleteUser = (req, res) => {
  try {
    console.log('service')
    const deleteList = userQueryBuilder.deleteUser(req)
    res.status(HttpStatus.OK).send(deleteList)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

module.exports = {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser
}
