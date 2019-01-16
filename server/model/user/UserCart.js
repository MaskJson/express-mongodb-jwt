const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 购物车

const UserCartSchema = new Schema({
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
