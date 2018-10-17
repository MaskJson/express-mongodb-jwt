const User = require('./../model/user');
const util = require('./../util/utils');

class UserController {

  constructor() {

  }

  async login(req, res, next) {
    const params = req.body;
    try {
      const user = await User.findOne({username: params.username});
      if (!user) {
        res.send({
          c: false,
          m: 'this user is not defined'
        })
      } else {
        if (params.password == user.password) {
          user.password = null;
          const { _id, username }  = user;
          const token = util.createToken({_id, username });
          res.send({
            c: true,
            m: 'login successfully',
            d: {
              user,
              token
            }
          })
        } else {
          res.send({
            c: false,
            m: 'password is error'
          })
        }
      }
    } catch (e) {
      res.send({
        c: false,
        m: 'login error'
      })
    }
  }
}

module.exports = new UserController();