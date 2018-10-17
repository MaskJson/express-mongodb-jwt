const mongoose = require('mongoose');
const setting = require('./../app/config');

/**
 * 连接mongodb
 */
mongoose.connect(setting.db.url);
/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
  console.info('连接成功: db test is connect successfully');
})
/**
 * 连接失败
 */
mongoose.connection.on('error', function (err) {
  console.error('连接失败: db test if failed to connect');
})
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.error('connection is disconnected, it is connecting again...');
  mongoose.connect(setting.db.url);
})

module.exports = mongoose;
