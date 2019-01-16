const mongoose = require('../../mongodb/index');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  password: { type: String }
})

module.exports = mongoose.model('User', UserSchema, 'user');

// User = mongoose.model('User');
