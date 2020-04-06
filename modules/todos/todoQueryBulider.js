const DB = require('../../models');

const getTodos = (req) => DB.todos.findAll();

const postTodos = async (req) => {
  let todo = {
    userId: req.body.userId,
    title: req.body.title,
    completed: req.body.completed,
  };
  todo = await DB.todos.create(todo);
  return todo;
};

const getTodosWithId = (req) => DB.posts.findByPk(req.params.userId).then((result) => {
  if (!result) {
    throw new Error('Not Found!!');
  } else {
    return result;
  }
});

const deleteTodo = async (req) => {
  await DB.users.destroy({
    where: {
      id: req.params.userId,
    },
  });
};

module.exports = {
  getTodos,
  postTodos,
  getTodosWithId,
  deleteTodo,
};