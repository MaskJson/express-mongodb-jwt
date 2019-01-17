const express = require('express');
const UserController = require('./../controller/User');

const router = express.Router();

router.post('/login', UserController.login);
router.get('/register', UserController.register);
router.get('/test', UserController.test)

module.exports = router;
