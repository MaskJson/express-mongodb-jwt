const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 子订单，订单详情

const OrderItemSchema = new Schema({
  price: {type: Number}, // 商品购买售价
  count: {type: Number}, // 购买数量
  commodityItemId: {
    type: Schema.ObjectId,
    ref: 'CommodityItem'
  },
  orderId: {
    type: Schema.ObjectId,
    ref: 'Order'
  }
})

module.exports = mongoose.model('OrderItem', OrderItemSchema, 'order_item');
