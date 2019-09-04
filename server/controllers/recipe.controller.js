const httpStatus = require('http-status');
// const cheerio = require("cheerio");
// const axios = require("axios");


// const {
//   decimalToBaseN, withHttp, withoutWWW, getNextSequence,
// } = require('../utils/mongoose.utils');
const Recipe = require('../models/recipe.model');
// const Visit = require('../models/visit.model');
const APIError = require('../utils/APIError.utils');
const { scrapeRecipe, scrapeCookbook } = require('../utils/recipe.utils');
// const { PUBLIC_URL, RECIPE_URL } = require('../config/config');

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
      const recipes = await scrapeCookbook('Shellfish/all/Fall');
      // const recipes = await Recipe.find({});


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
  update: async (req, res, next) => {
    try {
      return res.send("TODO: CREATE");
    } catch (err) {
      return next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      return res.send("TODO: CREATE");
    } catch (err) {
      return next(err);
    }
  },
  getAnalytics: async (req, res, next) => {
    try {
      return res.send("TODO");
    } catch (err) {
      return next(err);
    }
  },
};
