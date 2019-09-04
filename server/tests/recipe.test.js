const httpStatus = require('http-status');
const app = require('../app');
// const { getNextSequence, clearDatabase } = require('../utils/mongoose.utils');

describe('## Recipe APIs', () => {
  let recipe;

  before(async () => {
    // await clearDatabase();

    // const data = {
    //   index: await getNextSequence('recipeId'),
    //   originalUrl: 'https://iAmaReallyLongTestUrl.com/',
    // };
    // const response = await request(app).post('/api/recipes').send(data);
    // recipe = response.body;
  });

  describe('# GET /api/recipes/:recipeId', () => {
    it('should get recipe details', async () => {
      const recipeNameId = 'sheet-pan-bbq-pork-with-roasted-vegetables-maple-mustard-sauce-4'
      const response = await request(app).get(`/api/recipes/${recipeNameId}`);

      expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body.originalUrl).to.equal(recipe.originalUrl);
    });
  });

  describe('# GET /api/recipes', () => {
    it('should get all recipes', async () => {
      const response = await request(app).get('/api/recipes');

      expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body).to.have.lengthOf(1);
    });
  });

  describe('# GET /api/recipes/analytics/:tinyUrlId', () => {
    it('should get recipe analytics', async () => {
      // const response = await request(app).get(`/api/recipes/analytics/${recipe.tinyUrlId}`);

      // expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body.tinyUrlId).to.equal(recipe.tinyUrlId);
    });
  });

  describe('# POST /api/recipes', () => {
    it('should create new recipe', async () => {
      // TODO
    });
  });
});
