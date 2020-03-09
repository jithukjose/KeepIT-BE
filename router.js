const userRouter = require('./modules/users/userRouter')
const postRouter = require('./modules/posts/postRouter')
const todoRouter = require('./modules/todos/todoRouter')
const initRouter = require('./modules/init/initRouter')
const accountRouter = require('./modules/account/accountRouter')
module.exports = (app) => {
  app.use('/api', initRouter)
  app.use('/api/users', userRouter)
  app.use('/api/posts', postRouter)
  app.use('/api/todos', todoRouter)
  app.use('/api', accountRouter)
}
