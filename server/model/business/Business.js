const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 商家
const BusinessSchema = new Schema({
  name: {type: String},
  description: {type: String},
  logo: {type: String}
})

module.exports = mongoose.model('Business', BusinessSchema, 'business');
