var HttpStatus = require('http-status-codes')
const userQueryBuilder = require('./usersQueryBulider')
const { validationResult } = require('express-validator')

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
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send({ errors: errors.array() })
    }

    const postUsersResponse = await userQueryBuilder.postUsers(req)
    // console.log(postUsersResponse)
    res.status(HttpStatus.CREATED).send(postUsersResponse)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const getUsersWithId = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send({ errors: errors.array() })
    }

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
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send({ errors: errors.array() })
    }
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
const editUser = async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .send({ errors: errors.array() })
    }
    const editUser = await userQueryBuilder.editUser(req)
    console.log('edit dgfjfdfuser', editUser)
    res.status(HttpStatus.OK).send(editUser)
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
  deleteUser,
  editUser
}
