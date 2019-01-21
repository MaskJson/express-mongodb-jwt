const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;
// 购物车

const CartSchema = new Schema({
  businessId: {
    type: Schema.ObjectId,
    ref: 'Business'
  },
  userId: {
    type: Schema.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Cart', CartSchema, 'cart');
