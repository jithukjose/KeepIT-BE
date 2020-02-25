let DB = require('../../models')

const getPosts = (req) => {
  return DB.posts.findAll()
}

const postPostdata = async (req) => {
  let postLists = {
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body
  }
  postList = await DB.posts.create(postLists)
  return postList
}

const getPostsWithId = (req) => {
  return DB.posts.findByPk(req.params.userId).then((result) => {
    if (!result) {
      throw new Error('Not Found!!')
    } else {
      return result
    }
  })
}

const deletePosts = async (req) => {
  await DB.posts.destroy({
    where: {
      id: req.params.userId
    }
  })
}

module.exports = {
  getPosts,
  postPostdata,
  getPostsWithId,
  deletePosts
}
