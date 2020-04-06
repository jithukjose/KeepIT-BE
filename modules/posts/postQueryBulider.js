const DB = require('../../models');

const getPosts = (req) => DB.posts.findAll({
  where: {
    userId: req.decode.userId
  },

})


const postPostdata = async (req) => {
  // console.log(req.decode.userId, 'here')
  const postLists = {
    userId: req.body.userId,
    title: req.body.title,
    body: req.body.body,
  };

  return DB.posts.create(postLists);
  // return postList;
};



const getPostsWithId = (req) => DB.posts.findByPk(req.params.userId).then((result) => {
  if (!result) {
    throw new Error('Not Found!!');
  } else {
    return result;
  }
});

const deletePosts = async (req) => {
  await DB.posts.destroy({
    where: {
      id: req.params.userId,
    },
  });
};

module.exports = {
  getPosts,
  postPostdata,
  getPostsWithId,
  deletePosts,
};