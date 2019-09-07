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
    // required: true,
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
  },
  ratingCount: {
    type: Number,
    default: 0
  },
  ratingValue: {
    type: Number,
    default: 5
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  cookedCount: {
    type: Number,
    default: 0
  },  
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: [InstructionSchema],
}, {
  timestamps: true,
});

// Consider this for optimzations where comptued rating is not needed
// RecipeSchema.statics.list = function(finding, skipping, limiting, sorting) {
//   const defaultFind = { ratingCount: { $gte: 1000}}
//   const defaultSelect = [
//     'author', 
//     'titleMain', 
//     'titleSub', 
//     'cookTimeMins', 
//     'servings', 
//     'calories', 
//     'thumbnailUrl', 
//     'ratingCount', 
//     'ratingValue',
//     'createdAt'
//   ]
//   // const defaultSort = [[{'ratingCount': 1, 'ratingValue': 1}]]
//   const defaultSort = [['ratingCount', -1], ['ratingValue', -1]]

//   return this.find({...defaultFind, ...finding})
//     .select([...defaultSelect])
//     .skip(skipping || 0)
//     .limit(limiting || 100)
//     // .sort([...defaultSort, ...sorting,]);
//     .sort([...defaultSort]);
// }

RecipeSchema.statics.list = async function(matching, skipping, limiting, sorting) {
  const defaultProject = {
    'author': 1,
    'titleMain': 1,
    'titleSub': 1,
    'cookTimeMins': 1,
    'servings': 1,
    'calories': 1,
    'thumbnailUrl': 1,
    'ratingCount': 1,
    'ratingValue': 1,
    'cookedCount': 1,
    'isFeatured': 1,
    'createdAt': 1,
  }
  
  const recipes = await this.aggregate([
    { $match: { ...matching }},
    { $project: { ...defaultProject, ratingScore: { $multiply: ['$ratingCount', '$ratingValue']} }},
    { $skip: skipping || 0 },
    { $limit: limiting || 15 },
    { $sort: { ...sorting, ratingScore: -1 }}
  ])

  return recipes;
}

module.exports = mongoose.model('Recipe', RecipeSchema);
