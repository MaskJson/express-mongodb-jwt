const AbstractController = require('./AbstractController');
const multer = require('multer')({ dest: 'uploads/' });
// upload event
const multUpload = multer.array('file', 12);
const multSingle = multer.single('file');

class UploadController extends  AbstractController {
  constructor() {
    super();
  }
  // 批量上传
  async multUpload (req, res) {
    multUpload(req, res, function (err) {
      if (err) {
        res.send({
          c: false,
          m: 'upload error',
          d: null
        })
      }
      res.send({
        c: true,
        m: 'upload successfully',
        d: req.files
      })
    })
  }
  // 单个上传
  async singleUpload (req, res) {
    multSingle(req, res, function (err) {
      if (err) {
        res.send({
          c: false,
          m: 'upload error',
          d: null
        })
      }
      res.send({
        c: true,
        m: 'upload successfully',
        d: req.file
      })
    })
  }
}

module.exports = new UploadController();
