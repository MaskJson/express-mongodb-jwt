const mongoose = require('../../../mongodb/index');
const Schema = mongoose.Schema;
// 货品对应的规格

const CommodityFormatSchema = new Schema({
  formatId: {
    type: Schema.ObjectId,
    ref: 'Format'
  },
  commodityId: {
    type: Schema.ObjectId,
    ref: 'Commodity'
  }
})

module.exports = mongoose.model('CommodityFormat', CommodityFormatSchema, 'commodity_format');
