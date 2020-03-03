const express = require('express');
const { auth } = require('../../middlewares/securityMiddleware')

const router = express.Router();

const {
  getPosts,
  postPostdata,
  getPostsWithId,
  deletePosts,
} = require('./postservice');

router.get('/', auth, getPosts);
router.post('/', auth, postPostdata);
router.get('/:userId', auth, getPostsWithId);
router.delete('/:userId', auth, deletePosts);

module.exports = router;