const User = require('./../model/user');
const util = require('./../util/utils');
const AbstractController = require('./AbstractController');
const resSuccess = util.resSuccess;
const resError = util.resError;

class UserController extends AbstractController {

  constructor() {
    super();
  }
  // 登录
  async login(req, res) {
    const params = req.body;
    try {
      const user = await User.findOne({username: params.username});
      if (!user) {
        resError(res, 'this user is not found');
      } else {
        if (params.password == user.password) {
          user.password = null;
          const { _id, username }  = user;
          const token = util.createToken({_id, username });
          resSuccess({ user , token })
        } else {
          resError(res, 'password is error');
        }
      }
    } catch (e) {
      resError(res, 'login error');
    }
  }
  // 注册
  async register(req, res) {
    const params = req.query;
    try {
      const userSave = new User({username: params.username, password: params.password});
      userSave.save((err, entity) => {
        if (err) {
          resError(res, err);
        }
        else {
          const { _id, username } = entity;
          const token = util.createToken({_id, username });
          resSuccess(res, { user: entity, token: token });
        }
      });
    } catch (e) {
      resError(res)
    }
  }
}

module.exports = new UserController();
