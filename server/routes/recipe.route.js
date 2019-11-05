const express = require('express');
const recipeController = require('../controllers/recipe.controller');
const { checkCache } = require('../utils/redis.utils');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(checkCache, recipeController.list)
  .post(recipeController.create);

router.route('/featured')
  .get(checkCache, recipeController.listFeatured);

router.route('/popular')
  .get(checkCache, recipeController.listPopular);

router.route('/new')
  .get(checkCache, recipeController.listNew);

router.route('/most-liked')
  .get(checkCache, recipeController.listMostLiked);

router.route('/search')
  .get(checkCache, recipeController.search);

router.route('/:recipeId')
  .get(recipeController.get);

// router.route('/scrape/:mainIngredient?/:cuisine?/:season?')
//   .get(recipeController.list)

module.exports = router;
