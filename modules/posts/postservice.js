const HttpStatus = require('http-status-codes');
const postQueryBuilder = require('./postQueryBulider');

const getPosts = async (req, res, next) => {
  try {
    const getPostsResponse = await postQueryBuilder.getPosts(req);
    res.status(HttpStatus.OK).send(getPostsResponse);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      },
    });
  }
};

const postPostdata = async (req, res, next) => {
  try {
    const postPostsResponse = await postQueryBuilder.postPosts(req);
    res.status(HttpStatus.CREATED).send(postPostsResponse);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      },
    });
  }
};

const getPostsWithId = async (req, res) => {
  try {
    const getSinglepost = await postQueryBuilder.getPostsWithId(req);
    res.status(HttpStatus.ACCEPTED).send(getSinglepost);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      },
    });
  }
};

const deletePosts = (req, res) => {
  try {
    const deleteList = postQueryBuilder.deletePosts(req);
    res.status(HttpStatus.OK).send(deleteList);
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR,
      },
    });
  }
};

module.exports = {
  getPosts,
  postPostdata,
  getPostsWithId,
  deletePosts,
};