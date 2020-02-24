var express = require('express')
var router = express.Router()

/* GET Date */
router.get('/', function(req, res, next) {
  res.send({ Date: Date.now() })
})

module.exports = router
