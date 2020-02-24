const express = require('express')
const router = express.Router()
const {
  getTodos,
  postTodos,
  getTodosWithId,
  deleteTodo
} = require('./todoService')

// /* GET users listing. */
// let s = ''
// router.get(
//   '/',
//   function(req, res, next) {
//     s = 'hiii'
//     res.send(s)
//     //next()
//   },
//   function(req, res, next) {
//     s = 'hello'
//     res.send(s)
//   }
// )
router.get('/', getTodos)
router.post('/', postTodos)
router.get('/:userId', getTodosWithId)
router.delete('/:userId', deleteTodo)

// router.put('/:todoId')
// router.delete('/:todoId')
// router.get('/:todoId')
module.exports = router
