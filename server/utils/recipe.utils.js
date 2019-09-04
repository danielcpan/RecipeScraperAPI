// const httpStatus = require('http-status');
// const mongoose = require('mongoose');
const cheerio = require("cheerio");
const axios = require("axios");

const { RECIPE_URL } = require('../config/config');
// const APIError = require('../utils/APIError.utils');

module.exports = {
  fetchData: async endpoint => {
    const result = await axios.get(`${RECIPE_URL}/${endpoint}`);
    
    return cheerio.load(result.data, {
      xml: {
        normalizeWhitespace: true,
      }
    });
  },
  scrapeRecipe: async recipeNameId => {
    try {
      const $ = await module.exports.fetchData(recipeNameId);

      const recipe = {
        nameId: recipeNameId,
        titleMain: '',
        titleSub: '',
        time: '',
        servings: '',
        nutrition: '',
        description: '',
        mainImage: '',
        ingredientsImage: '',
        ingredients: new Set(),
        instructions: []
      }
  
      recipe.titleMain = $('.ba-recipe-title__main').text().trim();
      recipe.titleSub = $('.ba-recipe-title__sub').text().trim();
  
      $('.ba-info-list__item-value').each((idx, el) => {
        const val = $(el).text().trim().replace(/\s\s+/g, ' ');
        let key = ''
        if (idx === 0) key = 'time'
        else if (idx === 1) key = 'servings'
        else if (idx === 2) key = 'nutrition'
  
        recipe[key] = val;
      })
  
      recipe.description = $('.recipe-main__description p').text().trim();
      recipe.mainImage = $('.ba-hero-image__hldr img').attr('src');
      recipe.ingredientsImage = $('.ba-feature-image__hldr img').attr('src');
  
      $('.section-recipe .step .col-md-6').each((idx, el) => {
        const instruction = {
          step: 0,
          stepTitle: '',
          stepText: '',
          stepImage: ''
        }
  
        instruction.step = $(el).find('.step-number').text().trim();
        instruction.stepTitle = $(el).find('.step-title').text().trim();
        instruction.stepText = $(el).find('.step-txt').text().trim();
        instruction.stepImage = $(el).find('img').attr('src');
  
        recipe.instructions.push(instruction);
      })
  
      $('.ba-info-list .ba-info-list__item .non-story').each((idx, el) => {
        const ingredient = $(el).text().trim().replace(/\s\s+/g, ' ');
        recipe.ingredients.add(ingredient);
      });
  
      return {
        ...recipe,
        ingredients: [...recipe.ingredients]
      }
    } catch (err) {
      return err;
    }
  },
  scrapeCookbook: async siteUrl => {

  }
  // list: async
}
