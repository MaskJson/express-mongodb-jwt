const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;

// 优惠券
const CouponSchema = new Schema({
  name: {type: String}, // 名称
  full: {type: Number},     // 满
  reduce: {type: Number},  // 减
  status: {type: Number}, // 类型 0：货品满减券，1：分类券，2：通用满减，3：通用减
  connectId: {
    type: Schema.ObjectId
  },
  connectType: {
    type: Number // 优惠券专属类型，0：货品专属，1：商家专属（店内所有货品可减）
  }
});

module.exports = mongoose.model('Coupon', CouponSchema, 'coupon');
