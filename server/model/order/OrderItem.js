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
  commodityId: {
    type: Schema.ObjectId,
    ref: 'Commodity'
  },
  orderId: {
    type: Schema.ObjectId,
    ref: 'Order'
  },
  status: {
    type: Number, // 订单状态：0：作废，1：已下单待发货，2：已发货待收货，3：确认收货待评价，4：订单完成
    default: 1
  }
})

module.exports = mongoose.model('OrderItem', OrderItemSchema, 'order_item');
