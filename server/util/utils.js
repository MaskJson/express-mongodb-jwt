const jwt = require('jsonwebtoken');
const configSetting = require('./../app/config');

/**
 * _id: user表主键
 * username: user用户名
 * @param token
 */
const createToken = (token = {}) => {
  if (!token._id || !token.username) {
    throw Error('token信息有误');
  }
  return jwt.sign(token, configSetting.jwtSecret, {expiresIn: 3600 * 24 * 7})
}
/**
 * token解密，获取用户ID
 * @param req
 */
const decodeToken = (req) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, configSetting.jwtSecret, function (err, decode) {
      if (!err) {
        return decode;
      } else {
        throw Error('decode token failed, please login')
      }
    })
  } catch (e) {
    throw Error('decode token failed, please login')
  }
}
/**
 * resSuccess c: code，m: message，d: data
 * @type {{createToken: (function(*=): *), decodeToken: decodeToken}}
 */
const resSuccess = (res, data = null, msg) => {
  const result = {
    c: 200,
    m: msg || '',
    d: data
  }
  res.status(200).send(result);
}
const resError = (res, msg) => {
  const result = {
    c: 400,
    m: msg || '请求异常',
    d: null
  }
  res.status(200).send(result);
}

module.exports = {
  createToken,
  decodeToken,
  resSuccess,
  resError
}
