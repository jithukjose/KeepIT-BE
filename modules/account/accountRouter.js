const express = require('express');
const router = express.Router();

const { login } = require('./accountService')


router.post('/login', login)

module.exports = router


