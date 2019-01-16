const express = require('express');
const TestController = require('./../controller/Test');

const router = express.Router();

router.get('/test', TestController.test);

module.exports = router;
