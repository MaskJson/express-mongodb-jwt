const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 收货地址

const AddressSchema = new Schema({
  phone: {type: String}, // 收货人号码
  name: {type: String}, // 收货人姓名
  description: {type: String}, // 收货地址描述
  status: {
    type: Boolean,  // 是否为默认地址
    default: false
  },
  userId: {
    type: Schema.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Address', AddressSchema, 'address');
