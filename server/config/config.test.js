module.exports = {
  ENV: 'test',
  MONGODB_URI: 'mongodb://127.0.0.1:27017/recipe_scraper_test',
  PORT: process.env.PORT || 5000,
  PUBLIC_URL: 'http://localhost:5000',
  RECIPE_URL: process.env.RECIPE_URL
};
