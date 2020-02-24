var HttpStatus = require('http-status-codes')
const postQueryBuilder = require('./postQueryBulider')

const getPosts = (req, res, next) => {
  try {
    const getPostsResponse = postQueryBuilder.getPosts(req)
    res.status(HttpStatus.OK).send(getPostsResponse)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: error.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const postPosts = (req, res, next) => {
  try {
    const postPostsResponse = postQueryBuilder.postPosts(req)
    res.status(HttpStatus.CREATED).send(postPostsResponse)
  } catch (error) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
      error: {
        message: ErrorEvent.message,
        code: HttpStatus.INTERNAL_SERVER_ERROR
      }
    })
  }
}

const getPostsWithId = (req, res) => {
  try {
    const getSinglepost = postQueryBuilder.getPostsWithId(req)
    res.status(HttpStatus.ACCEPTED).send(getSinglepost)
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

const deletePosts = (req, res) => {
  try {
    console.log('service')
    const deleteList = postQueryBuilder.deletePosts(req)
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
  getPosts,
  postPosts,
  getPostsWithId,
  deletePosts
}
