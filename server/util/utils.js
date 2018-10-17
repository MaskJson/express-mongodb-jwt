const jwt = require('jsonwebtoken');
const configSetting = require('./../app/config');

/**
 * id: user表主键
 * username: user用户名
 * @param token
 */
const createToken = (token = {}) => {
  if (!token._id || !token.username) {
    throw Error('token信息有误');
  }
  return jwt.sign(token, configSetting.jwtSecret, {expiresIn: 3600 * 24 * 7})
}

module.exports = {
  createToken
}