const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;

// 优惠券
const CouponSchema = new Schema({
  name: {type: String}, // 名称
  full: {type: Number},     // 满
  reduce: {type: Number},  // 减
  startTime: {type: Date},
  endTime: {type: Date},
  status: {
    type: Number,
    default: 1
  }, // 状态：1：默认启用，0：禁用
  connectId: {
    type: Schema.ObjectId
  },
  connectType: {
    type: Number // 优惠券专属类型，0：货品专属，1：商家专属（店内所有货品可减）
  },

});

module.exports = mongoose.model('Coupon', CouponSchema, 'coupon');
