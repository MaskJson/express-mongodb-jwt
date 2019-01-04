const mongoose = require('./../mongodb');
const Schema = mongoose.Schema;

const ClassesSchema = new Schema({
  name: { type: String },
  schoolId: {
    type: Schema.ObjectId,
    ref: 'School'
  }
})

module.exports = mongoose.model('Classes', ClassesSchema, 'classes');
