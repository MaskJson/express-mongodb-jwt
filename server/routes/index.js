const user = require('./user');
const upload = require('./upload');
const test = require('./test');

/**
 * req.body  基于body-parser中间件，将post请求参数json化
 * req.query 获取url中？后面的参数
 * req.params 获取url中的参数，restful
 */

exports.registerRouter = app => {
  app.use('/user', user);
  app.use('/upload', upload);
  app.use('/test', test);
}

