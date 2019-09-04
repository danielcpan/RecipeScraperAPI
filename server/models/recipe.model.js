const mongoose = require('mongoose');
const InstructionSchema = require('./instruction.model');

const RecipeSchema = new mongoose.Schema({
  nameId: {
    type: String,
    unique: true,
    required: true,
  },
  author: {
    type: String,
  },
  category: {
    type: String,
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
  },
  servings: {
    type: Number,
  },
  calories: {
    type: Number,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnailUrl: {
    type: String,
    required: true,
  },  
  mainImageUrl: {
    type: String,
    required: true,
  },
  ingredientsImageUrl: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: [InstructionSchema],
  ratingCount: {
    type: Number,
    default: 0
  },
  ratingValue: {
    type: Number,
    default: 5
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
