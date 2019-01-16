const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 分类

const ClassifySchema = new Schema({
  name: {type: String},
  logo: {type: String},
  parentId: {
    type: Schema.ObjectId,
    ref: 'Classify'
  },
  firstId: {
    type: Schema.ObjectId,
    ref: 'Classify'
  },
})

module.exports = mongoose.model('Classify', ClassifySchema, 'classify');
