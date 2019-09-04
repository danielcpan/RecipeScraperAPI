const httpStatus = require('http-status');

const Recipe = require('../models/recipe.model');
const APIError = require('../utils/APIError.utils');
const { scrapeRecipe, scrapeCookbook } = require('../utils/recipe.utils');

module.exports = {
  get: async (req, res, next) => {
    try {
      let recipe = await Recipe.findOne({ nameId: req.params.recipeNameId});
      
      // If not found, scrape and save
      if (!recipe) {
        recipe = await scrapeRecipe(req.params.recipeNameId);
        newRecipe = new Recipe(recipe);
        await newRecipe.save();
      }

      return res.json(recipe)
    } catch (err) {
      return next(err);
    }
  },
  list: async (req, res, next) => {
    try {
      const recipes = await Recipe.find({});

      return res.json(recipes)
    } catch (err) {
      return next(err);
    }
  },
  create: async (req, res, next) => {
    try {

      return res.send("TODO: CREATE");
    } catch (err) {
      return next(err);
    }
  },
};
