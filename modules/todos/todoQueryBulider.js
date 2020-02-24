let DB = require('../../models')

const getTodos = (req) => {
  return DB.todos.findAll()
}

const postTodos = async (req) => {
  let todo = {
    userId: req.body.userId,
    title: req.body.title,
    completed: req.body.completed
  }
  todo = await DB.todos.create(todo)
  return todo
}

// const getTodosWithId = (req) => {
//   for (let i = 0; i < todos.length; i++) {
//     if (req.params.userId == todos[i].id) {
//       return todos[i]
//     }
//   }
// }

const getTodosWithId = (req) => {
  return DB.posts.findByPk(req.params.userId).then((result) => {
    if (!result) {
      console.log('Not found!')
    } else {
      return result
    }
  })
}

const deleteTodo = (req) => {
  DB.users.destroy({
    where: {
      id: req.params.userId
    }
  })
  return 'Deleted'
}

// const deleteTodo = (req) => {
//   for (let i = 0; i < todos.length; i++) {
//     if (req.params.userId == todos[i].id);
//     todos.splice(todos[i].id, 1)
//     console.log(todos[i])
//   }
// }

module.exports = {
  getTodos,
  postTodos,
  getTodosWithId,
  deleteTodo
}
