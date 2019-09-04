const mongoose = require('mongoose');
const InstructionSchema = require('./instruction.model');

const RecipeSchema = new mongoose.Schema({
  nameId: {
    type: String,
    unique: true,
    required: true,
  },
  titleMain: {
    type: String,
    required: true,
  },
  titleSub: {
    type: String,
    required: true,
  },
  cookTimeMins: {
    type: Number,
    // required: true,
  },
  servings: {
    type: Number,
    // required: true,
  },
  calories: {
    type: Number,
    // required: true,
  },
  description: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  ingredientsImage: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: [InstructionSchema],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
