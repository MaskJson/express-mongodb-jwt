const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 用户的优惠券

const UserCouponSchema = new Schema({
  userId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  couponId: {
    type: Schema.ObjectId,
    ref: 'Coupon'
  },
  count: {
    type: Number
  }
})

module.exports = mongoose.model('UserCoupon', UserCouponSchema, 'user_coupon');
