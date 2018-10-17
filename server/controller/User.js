const User = require('./../model/user');
const util = require('./../util/utils');
const AbstractController = require('./AbstractController');
const responseJson = util.responseJson;

class UserController extends AbstractController {

  constructor() {
    super();
  }

  async login(req, res) {
    const params = req.body;
    try {
      const user = await User.findOne({username: params.username});
      if (!user) {
        res.send({
          c: false,
          m: 'this user is not defined'
        })
        responseJson(res, null, false)
      } else {
        if (params.password == user.password) {
          user.password = null;
          const { _id, username }  = user;
          const token = util.createToken({_id, username });
          responseJson(res, { user, token })
        } else {
          responseJson(res, null, false, 'password is error')
        }
      }
    } catch (e) {
      responseJson(res, null, false, 'login error')
    }
  }
}

module.exports = new UserController();