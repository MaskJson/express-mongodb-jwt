const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 父订单，父订单对应一个商家和一个买家信息以及多个子订单

const OrderSchema = new Schema({
  businessId: {
    type: Schema.ObjectId,
    ref: 'Business'
  },
  userId: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  addressId: {
    type: Schema.ObjectId,
    ref: 'Address'
  }
})
