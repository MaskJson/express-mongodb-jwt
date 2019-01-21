const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 货品,不同规格的商品对应同一个货品

const CommoditySchema = new Schema({
  name: {type: String}, // 名称
  description: {type: String}, // 简介
  detail: {type: String}, // 详情
  clickCount: {
    type: Number,
    default: 0
  }, // 点击量
  photo: {type: String}, // 封面
  price: {type: Number}, // 最低售价，仅用于货品列表的展示，不同规格可能价格不一样, 也可通过商品排序取最低
  activityPrice: {type: Number},
  freight: {type: Number}, // 运费
  sales: {
    type: Number,
    default: 0
  }, // 销量,
  businessId: { // 商家
    type: Schema.ObjectId,
    ref: 'Business'
  },
  brandId: { // 品牌
    type: Schema.ObjectId,
    ref: 'Brand'
  }
})

module.exports = mongoose.model('Commodity', CommoditySchema, 'commodity');
