const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 购物车

const CartItemSchema = new Schema({
  parentId: {
    type: Schema.ObjectId,
    ref: 'Cart'
  },
  commodityItemId: {        // 商品id
    type: Schema.ObjectId,
    ref: 'CommodityItem'
  },
  userId: {
    type: Schema.ObjectId,  // 用户id
    ref: 'User'
  },
  count: {
    type: Number // 数量
  }
})

module.exports = mongoose.model('CartItem', CartItemSchema, 'cart_item');
