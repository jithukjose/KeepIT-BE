var express = require('express')
var router = express.Router()
const { validate } = require('./userValidator')

/* GET users listing. */
const {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser,
  editUser
} = require('./usersService')

router.get('/', getUsers)
router.post('/', validate('postUserCase'), postUsers)
router.get('/:userId', validate('getSingleUserCase'), getUsersWithId)
router.delete('/:userId', validate('deleteUserCase'), deleteUser)
router.put('/:userId', validate('editUserCase'), editUser)

module.exports = router
