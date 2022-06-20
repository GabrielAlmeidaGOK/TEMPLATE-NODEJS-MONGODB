const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
      type: String,
      required: true
  },
  year: {
      type: Date
  }
});


const TestSch = mongoose.model('TestSch', TestSchema);

module.exports = TestSch;