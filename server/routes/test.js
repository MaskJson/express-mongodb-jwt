const express = require('express');
const TestController = require('./../controller/Test');

const router = express.Router();

router.get('/addstu', TestController.addStudent);
router.get('/addclass', TestController.addClasses);
router.get('/addschool', TestController.addSchool);
router.get('/query', TestController.queryTest);

module.exports = router;
