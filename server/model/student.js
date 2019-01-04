const mongoose = require('./../mongodb');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  classesId: {
    type: Schema.ObjectId,
    ref: 'Classes'
  },
  schoolId: {
    type: Schema.ObjectId,
    ref: 'School'
  }
})

module.exports = mongoose.model('Student', StudentSchema, 'student');
