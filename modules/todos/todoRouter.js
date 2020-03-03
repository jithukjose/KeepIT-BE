const express = require('express');
const { auth } = require('../../middlewares/securityMiddleware')

const router = express.Router();
const {
  getTodos,
  postTodos,
  getTodosWithId,
  deleteTodo,
} = require('./todoService');



router.get('/', auth, getTodos);
router.post('/', auth, postTodos);
router.get('/:userId', auth, getTodosWithId);
router.delete('/:userId', auth, deleteTodo);

// router.put('/:todoId')
// router.delete('/:todoId')
// router.get('/:todoId')
module.exports = router;