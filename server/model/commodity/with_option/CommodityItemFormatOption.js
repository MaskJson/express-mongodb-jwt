const mongoose = require('../../../mongodb/index');
const Schema = mongoose.Schema;
// 商品对应的规格选项

const CommodityItemFormatOptionSchema = new Schema({
  commodityItemId: {
    type: Schema.ObjectId,
    ref: 'CommodityItem'
  },
  commodityFormatOptionId: {
    type: Schema.ObjectId,
    ref: 'CommodityFormatOption'
  }
})

module.exports = mongoose.model('CommodityItemFormatOption', CommodityItemFormatOptionSchema, 'commodity_item_format_option');
