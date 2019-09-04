const httpStatus = require('http-status');
// const cheerio = require("cheerio");
// const axios = require("axios");


// const {
//   decimalToBaseN, withHttp, withoutWWW, getNextSequence,
// } = require('../utils/mongoose.utils');
// const Link = require('../models/link.model');
// const Visit = require('../models/visit.model');
const APIError = require('../utils/APIError.utils');
const { scrapeRecipe } = require('../utils/recipe.utils');
// const { PUBLIC_URL, RECIPE_URL } = require('../config/config');

module.exports = {
  get: async (req, res, next) => {
    try {
      let recipe;

      // const link = await Link.findOne({ _id: req.params.linkId }).populate('visits');

      // Scrape if not found
      recipe = await scrapeRecipe(req.params.recipeNameId);



      if (!recipe) {
        return next(new APIError('Recipe not found', httpStatus.NOT_FOUND));
      }

      return res.json(recipe)
    } catch (err) {
      return next(err);
    }
  },
  list: async (req, res, next) => {
    try {

      // const recipe = await get('https://www.blueapron.com/recipes/sheet-pan-bbq-pork-with-roasted-vegetables-maple-mustard-sauce-4');

      return res.json(recipe)
    } catch (err) {
      return next(err);
    }
  },
  create: async (req, res, next) => {
    try {

      return res.send("TODO");
    } catch (err) {
      return next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      return res.send("TODO");
    } catch (err) {
      return next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      return res.send("TODO");
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
