const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 货品规格

const FormatSchema = new Schema({
  name: {type: String}
})

module.exports = mongoose.model('Format', FormatSchema, 'format');
