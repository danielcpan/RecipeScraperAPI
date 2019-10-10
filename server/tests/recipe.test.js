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
      const recipeId = '5d70519173112953ec462688'
      const response = await request(app).get(`/api/recipes/${recipeId}`);

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

  describe('# GET /api/recipes/featured', () => {
    it('should get all featured recipes', async () => {
      const response = await request(app).get('/api/recipes/featured');

      expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body).to.have.lengthOf(1);
    });
  });

  describe('# GET /api/recipes/popular', () => {
    it('should get all popular recipes', async () => {
      const response = await request(app).get('/api/recipes/popular');

      expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body).to.have.lengthOf(1);
    });
  });
  
  describe('# GET /api/recipes/new', () => {
    it('should get all new recipes', async () => {
      const response = await request(app).get('/api/recipes/new');

      expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body).to.have.lengthOf(1);
    });
  });
  
  describe('# GET /api/recipes/most-liked', () => {
    it('should get all most liked recipes', async () => {
      const response = await request(app).get('/api/recipes/most-liked');

      expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body).to.have.lengthOf(1);
    });
  });
  
  describe('# GET /api/recipes/featured', () => {
    it('should get all featured recipes', async () => {
      const response = await request(app).get('/api/recipes/featured');

      expect(response.status).to.equal(httpStatus.OK);
      // expect(response.body).to.have.lengthOf(1);
    });
  });

  describe('# POST /api/recipes', () => {
    it('should create new recipe', async () => {
      // TODO
    });
  });

  describe('# GET /api/recipes/search', () => {
    it('should search for recipes', async () => {
      const query = 'steak'
      const response = await request(app).get(`/api/recipes/search?${query}`);

      expect(response.status).to.equal(httpStatus.OK);
    });
  });  
});
