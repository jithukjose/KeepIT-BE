var express = require('express')
var router = express.Router()

const {
  getPosts,
  postPosts,
  getPostsWithId,
  deletePosts
} = require('./postservice')

router.get('/', getPosts)
router.post('/', postPosts)
router.get('/:userId', getPostsWithId)
router.delete('/:userId', deletePosts)

module.exports = router
