var express = require('express')
var router = express.Router()

/* GET users listing. */
const {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser
} = require('./usersService')

router.get('/', getUsers)
router.post('/', postUsers)
router.get('/:userId', getUsersWithId)
router.delete('/:userId', deleteUser)

module.exports = router
