let DB = require('../../models')

const getPosts = (req) => {
  return DB.posts.findAll()
}

const postPosts = async (req) => {
  let postLists = {
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body
  }
  postList = await DB.posts.create(postLists)
  return postList
}

// const getPostsWithId = (req) => {
//   for (let i = 0; i < posts.length; i++) {
//     if (req.params.userId == posts[i].id) {
//       return posts[i]
//     }
//   }
// }

const getPostsWithId = (req) => {
  return DB.posts.findByPk(req.params.userId).then((result) => {
    if (!result) {
      return 'Not Found!!'
    } else {
      return result
    }
  })
}

// const deletePosts = (req) => {
//   console.log('quert')

//   for (let i = 0; i < posts.length; i++) {
//     if (req.params.userId == posts[i].id);
//     posts.splice(posts[i].id, 1)
//   }
//   return 'sucess'
// }

const deletePosts = (req) => {
  DB.posts.destroy({
    where: {
      id: req.params.userId
    }
  })
  return 'Deleted'
}

module.exports = {
  getPosts,
  postPosts,
  getPostsWithId,
  deletePosts
}
