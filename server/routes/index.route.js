const express = require('express');
const recipeRoutes = require('./recipe.route');
// const tinyUrlRoutes = require('./tinyUrl.route');

const router = express.Router(); // eslint-disable-line new-cap

router.get('/health-check', (req, res) => res.send('OK'));

// router.use('/', tinyUrlRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
