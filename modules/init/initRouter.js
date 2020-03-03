const express = require('express');

const router = express.Router();

/* GET Date */
router.get('/', (req, res, next) => {
  res.send({ Date: Date.now() });
});

module.exports = router;