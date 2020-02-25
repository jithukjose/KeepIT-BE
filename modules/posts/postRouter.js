var express = require('express')
var router = express.Router()

const {
  getPosts,
  postPostdata,
  getPostsWithId,
  deletePosts
} = require('./postservice')

router.get('/', getPosts)
router.post('/', postPostdata)
router.get('/:userId', getPostsWithId)
router.delete('/:userId', deletePosts)

module.exports = router
