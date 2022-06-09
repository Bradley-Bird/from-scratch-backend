const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const { characters } = require('../data/characters');

describe('character routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  it('/it should return a list of characters', async () => {
    const resp = await request(app).get('/api/v1/characters');
    const expected = characters.map((character) => character);
    expect(resp.body).toEqual(expected);
  });

  afterAll(() => {
    pool.end();
  });
});
