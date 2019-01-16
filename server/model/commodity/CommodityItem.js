const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 商品，购物流程中，没买一件商品则库中减少一件，对应商品表中的count，一个货品对应多种规格的商品

const CommodityItemSchema = new Schema({
  originalPrice: {type: Number}, // 原价
  promotionPrice: {type: Number}, // 促销价
  count: {type: Number}, // 库存
  parentId: {
    type: Schema.ObjectId,
    ref: 'Commodity'
  }
})

module.exports = mongoose.model('CommodityItem', CommodityItemSchema, 'commodity_item');
