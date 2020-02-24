const todos = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false
  },
  {
    userId: 2,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false
  },
  {
    userId: 3,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false
  },
  {
    userId: 4,
    id: 4,
    title: 'et porro tempora',
    completed: true
  }
]

const getTodos = (req) => {
  return todos
}

const postTodos = (req) => {
  console.log(req.body.userId)
  const todo = {
    userId: req.body.userId,
    id: todos.length + 1,
    title: req.body.title,
    completed: req.body.completed
  }

  todos.push(todo)
  console.log(todos)
  return todo
}

const getTodosWithId = (req) => {
  for (let i = 0; i < todos.length; i++) {
    if (req.params.userId == todos[i].id) {
      return todos[i]
    }
  }
}

const deleteTodo = (req) => {
  for (let i = 0; i < todos.length; i++) {
    if (req.params.userId == todos[i].id);
    todos.splice(todos[i].id, 1)
    console.log(todos[i])
  }
}

module.exports = {
  getTodos,
  postTodos,
  getTodosWithId,
  deleteTodo
}
