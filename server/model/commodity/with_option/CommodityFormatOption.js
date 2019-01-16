const mongoose = require('../../../mongodb/index');
const Schema = mongoose.Schema;
// 货品规格的参数

const CommodityFormatOptionSchema = new Schema({
  name: {type: String},
  commodityFormatId: {
    type: Schema.ObjectId,
    ref: 'CommodityFormat'
  }
})

module.exports = mongoose.model('CommodityFormatOption', CommodityFormatOptionSchema, 'commodity_format_option');
