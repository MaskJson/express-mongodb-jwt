const mongoose = require('./../mongodb');
const Schema = mongoose.Schema;

const SchoolSchema = new Schema({
  name: { type: String },
})

module.exports = mongoose.model('School', SchoolSchema, 'school');
