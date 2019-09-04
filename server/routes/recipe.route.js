const express = require('express');
const recipeController = require('../controllers/recipe.controller');

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(recipeController.list)
  .post(recipeController.create);

router.route('/:recipeNameId')
  .get(recipeController.get)
  .put(recipeController.update)
  .delete(recipeController.delete);

module.exports = router;
