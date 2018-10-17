const express = require('express');
const UserController = require('./../controller/User');

const router = express.Router();

router.post('/login', UserController.login);

module.exports = router;