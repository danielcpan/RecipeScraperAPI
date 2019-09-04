module.exports = {
  development: {
    database: 'recipe_scraper_development',
  },
  test: {
    database: 'recipe_scraper_test',
  },
  production: {
    // database: 'mongodb://heroku_j3npvbjk:clh9dgs21qhlns7g4fcpv1vujc@ds163757.mlab.com:63757/heroku_j3npvbjk',
  },
  PORT: process.env.PORT || 5000,
  PUBLIC_URL: process.env.PUBLIC_URL,
  RECIPE_URL: process.env.RECIPE_URL,
};

