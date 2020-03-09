const express = require('express');
const router = express.Router();

const { login } = require('./accountService')
const { signup } = require('./accountService')


router.post('/login', login)
router.post('/signup', signup)


module.exports = router


