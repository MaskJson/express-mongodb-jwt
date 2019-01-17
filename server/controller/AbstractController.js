const jwt = require('jsonwebtoken');
const configSetting = require('./../app/config');

class AbstractController {
  getId(req) {
    try {
      const params = req.headers.authorization.split(' ');
      if (params[0] !== 'Bearer') {
        throw Error('token secret is error')
      }
      jwt.verify(params[1], configSetting.jwtSecret, function (err, decode) {
        if (!err) {
          return decode._id;
        } else {
          throw Error('decode token failed, please login')
        }
      })
    } catch (e) {
      throw Error('decode token failed, please login')
    }
  }
}

module.exports = AbstractController;
