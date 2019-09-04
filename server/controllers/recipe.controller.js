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
      // console.log("got here")
      // console.log("req.params.mainIngredient: " + req.params.mainIngredient)
      // console.log("req.params.cuisine: " + req.params.cuisine)
      // console.log("req.params.season: " + req.params.season)
      // const recipes = await scrapeCookbook('Shellfish/all/Fall');
      // const recipes = {}
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
