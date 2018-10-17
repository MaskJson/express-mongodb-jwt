const express = require('express');
const bodyParser = require('body-parser'); // request body
const cookieParser = require('cookie-parser');
const jwt = require('express-jwt');
const configSetting = require('./config');
const apiInterceptor = require('../config/apiInterceptor');
const router = require('./../routes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * 请求拦截，需要登录的token过滤
 */
app.use(jwt({
  secret: configSetting.jwtSecret
}).unless({
  path: apiInterceptor
}))

// 请求统一处理
app.use(function (err, req, res, next) {
  if (err) {console.log(err.name)
    if (err.name = 'UnauthorizedError') {
      res.status(401).send({
        c: false,
        m: 'token is not defined'
      })
    }
    res.status(403).send({
      c: false,
      m: err.message
    })
  } else {
    next(); // next() 表示执行后续的中间件直到结束执行api请求
  }
})

// 注册api路由
router.registerRouter(app);

app.listen(configSetting.listenPort);