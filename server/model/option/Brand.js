const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 品牌

const BrandSchema = new Schema({
  name: {type: String},
  englishName: {type: String},
  logo: {type: String},
  description: {type: String}
})

module.exports = mongoose.model('Brand', BrandSchema, 'brand');
