const express = require('express');

const router = express.Router();
const { validate } = require('./userValidator');
const { auth } = require('../../middlewares/securityMiddleware')
// const { authenticate } = require('../../middlewares/securityMiddleware')
const {
  getUsers,
  postUsers,
  getUsersWithId,
  deleteUser,
  editUser,
} = require('./usersService');

router.get('/', auth, getUsers);
router.post('/', validate('postUserCase'), postUsers);
// router.get('/:userId', authenticate, validate('getSingleUserCase'), getUsersWithId);
router.get('/:userId', auth, validate('getSingleUserCase'), getUsersWithId);
router.delete('/:userId', auth, validate('deleteUserCase'), deleteUser);
router.put('/:userId', auth, validate('editUserCase'), editUser);

module.exports = router;