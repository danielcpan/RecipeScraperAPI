const httpStatus = require('http-status');

const Recipe = require('../models/recipe.model');
const APIError = require('../utils/APIError.utils');
const { scrapeRecipe, scrapeCookbook } = require('../utils/recipe.utils');

module.exports = {
  get: async (req, res, next) => {
    try {
      let recipe = await Recipe.findOne({ nameId: req.params.recipeNameId});
      
      if (!recipe) {
        return next(new APIError('Recipe not found', httpStatus.NOT_FOUND));
      }

      // If not found, scrape and save
      // if (!recipe) {
      //   console.log(req.params.recipeNameId)
      //   recipe = await scrapeRecipe(req.params.recipeNameId);
      //   newRecipe = new Recipe(recipe);
      //   await newRecipe.save();        
      // }

      return res.json(recipe)
    } catch (err) {
      return next(err);
    }
  },
  list: async (req, res, next) => {
    const matching = {}
    const skipping = parseInt(req.query.skip)
    const limiting = parseInt(req.query.limit)
    const sorting = req.query.sort || {};

    try {
      const recipes = await Recipe.list(matching, skipping, limiting, sorting)
      return res.json(recipes)
    } catch (err) {
      return next(err);
    }
  },
  listFeatured: async (req, res, next) => {
    const matching = { 'isFeatured': 1 }
    const skipping = parseInt(req.query.skip)
    const limiting = parseInt(req.query.limit)
    const sorting = req.query.sort || {};

    try {
      const recipes = await Recipe.list(matching, skipping, limiting, sorting)
      return res.json(recipes)
    } catch (err) {
      return next(err);
    }
  },
  listPopular: async (req, res, next) => { // most cooked
    const matching = {}
    const skipping = parseInt(req.query.skip)
    const limiting = parseInt(req.query.limit)
    const sorting = req.query.sort || { 'cookedCount' : -1 };

    try {
      const recipes = await Recipe.list(matching, skipping, limiting, sorting)
      return res.json(recipes)
    } catch (err) {
      return next(err);
    }
  },
  listNew: async (req, res, next) => {
    const matching = {}
    const skipping = parseInt(req.query.skip)
    const limiting = parseInt(req.query.limit)
    const sorting = req.query.sort || { 'createdAt': -1 };

    try {
      const recipes = await Recipe.list(matching, skipping, limiting, sorting)
      return res.json(recipes)
    } catch (err) {
      return next(err);
    }
  },
  listMostLiked: async (req, res, next) => {
    const matching = {}
    const skipping = parseInt(req.query.skip)
    const limiting = parseInt(req.query.limit)
    const sorting = req.query.sort || { 'ratingCount' : -1 };

    try {
      const recipes = await Recipe.list(matching, skipping, limiting, sorting)
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
