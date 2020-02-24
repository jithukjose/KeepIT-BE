var HttpStatus = require('http-status-codes')
const todoQueryBuilder = require('./todoQueryBulider')

// const createTodo = (req, res, next) => {
//   const todo = todoQueryBuilder.createTodo(req)
//   res.send(todo)
// }

const getTodos = (req, res, next) => {
  try {
    const getTodosResponse = todoQueryBuilder.getTodos(req)
    res.status(HttpStatus.OK).send(getTodosResponse)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const postTodos = (req, res, next) => {
  try {
    const postTodoResponse = todoQueryBuilder.postTodos(req)
    res.status(HttpStatus.CREATED).send(postTodoResponse)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const getTodosWithId = (req, res) => {
  try {
    const getSingleTodo = todoQueryBuilder.getTodosWithId(req)
    res.status(HttpStatus.ACCEPTED).send(getSingleTodo)
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

const deleteTodo = (req, res) => {
  try {
    const deleteList = todoQueryBuilder.deleteTodo(req)
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
  getTodos,
  postTodos,
  getTodosWithId,
  deleteTodo
}
