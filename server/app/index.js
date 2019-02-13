const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser'); // request body
const cookieParser = require('cookie-parser');
const jwt = require('express-jwt');
const configSetting = require('./config');
const apiInterceptor = require('../config/apiInterceptor');
const router = require('./../routes');
const cors = require('cors');
const initSocket = require('../socket/index').init;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * 请求拦截，需要登录的token过滤
 */
try {
  app.use(jwt({
    secret: configSetting.jwtSecret
  }).unless({
    path: apiInterceptor
  }))
} catch (e) {
  throw Error('decode token error')
}

/**
 * 请求统一处理,token验证
 */
app.use(function (err, req, res, next) {
  if (err) {
    if (err.name = 'UnauthorizedError') {
      res.status(200).send({
        c: 401,
        m: 'token is not defined'
      })
    } else {
      res.status(200).send({
        c: 403,
        m: err.message
      })
    }
  } else {
    next(); // next() 表示执行后续的中间件直到结束执行api请求
  }
})

/**
 * 注册api路由
 */
router.registerRouter(app);

server.listen(configSetting.listenPort);

initSocket(io);

