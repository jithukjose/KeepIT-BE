const userRouter = require('./modules/users/userRouter')
const postRouter = require('./modules/posts/postRouter')
const todoRouter = require('./modules/todos/todoRouter')
const initRouter = require('./modules/init/initRouter')

module.exports = (app) => {
  app.use('/', initRouter)
  app.use('/api/users', userRouter)
  app.use('/api/posts', postRouter)
  app.use('/api/todos', todoRouter)
}
