var HttpStatus = require('http-status-codes')
const userQueryBuilder = require('./usersQueryBulider')

const getUsers = async (req, res, next) => {
  try {
    const getUsersResponse = await userQueryBuilder.getUsers(req)
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

const postUsers = async (req, res, next) => {
  try {
    const postUsersResponse = await userQueryBuilder.postUsers(req)
    console.log(postUsersResponse)
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

const getUsersWithId = async (req, res) => {
  try {
    const getSingleUser = await userQueryBuilder.getUsersWithId(req)
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

const deleteUser = async (req, res) => {
  try {
    console.log('service')
    const deleteList = await userQueryBuilder.deleteUser(req)
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
