const mongoose = require('mongoose');

const InstructionSchema = new mongoose.Schema({
  stepId: {
    type: String,
  },
  stepTitle: {
    type: String,
  },
  stepText: {
    type: String,
  },
  stepImage: {
    type: String,
  },
});

module.exports = InstructionSchema;
