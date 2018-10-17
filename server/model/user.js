const mongoose = require('./../mongodb');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String }
  // id: Number,
})

// UserSchema.index({ id: 1 })

module.exports = mongoose.model('Users', UserSchema);