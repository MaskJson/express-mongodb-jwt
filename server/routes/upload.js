const express = require('express');
const router = express.Router();

const UploadController = require('../controller/Upload');


router.post('/multer-upload', UploadController.multUpload);
router.post('/single-upload', UploadController.singleUpload);

module.exports = router;
