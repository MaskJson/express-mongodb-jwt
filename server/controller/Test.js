const Student = require('./../model/student');
const Classes = require('./../model/classes');
const School = require('./../model/school');
const util = require('./../util/utils');
const AbstractController = require('./AbstractController');
const resSuccess = util.resSuccess;
const resError = util.resError;

class TestController extends AbstractController {
  constructor() {
    super();
  }

  // 添加学校
  async addSchool(req, res) {
    try {
      const school = new School({name: '测试班级'});
      school.save((err, entity) => {
        if (err) {
          resError(res, err);
        } else {
          resSuccess(res, entity);
        }
      })
    } catch (e) {
      resError(res);
    }
  }
  // 添加班级
  async addClasses(req, res) {
    try {
      const classes = new Classes({name: '测试班级', schoolId: '5c2f1d340df97424b4e4d6d4'});
      classes.save((err, entity) => {
        if (err) {
          resError(res, err);
        } else {
          resSuccess(res, entity);
        }
      })
    } catch (e) {
      resError(res);
    }
  }
  // 添加学生
  async addStudent(req, res) {
    try {
      const classes = new Student({name: 'Ling', age: 18, classesId: '5c2f12cce096fc2b04526c27', schoolId: '5c2f1d340df97424b4e4d6d4'});
      classes.save((err, entity) => {
        if (err) {
          resError(res, err);
        } else {
          resSuccess(res, entity);
        }
      })
    } catch (e) {
      resError(res);
    }
  }
  // 多表级联查询测试
  async queryTest(req, res) {
    try {
      Student.find({}, 'name').populate({
        path: 'classesId',
        model: 'Classes',
        select: '_id',
        populate: {
          path: 'schoolId',
          model: 'School',
          select: '_id'
        }
      }).populate({
        path: 'schoolId',
        model: 'School',
        select: '_id'
      }).exec((err, list) => {
        if (err) {
          console.info(err)
          resError(res);
        } else {
          console.info(list)
          resSuccess(res, list);
        }
      })
    } catch (e) {
      resError(res, e);
    }
  }
}

module.exports = new TestController();
