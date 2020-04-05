const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG List', () => {
  beforeEach( async () => {
   await connection.migrate.rollback();
   await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  })

  it('should list all ONGs', async () => {
    const response = await request(app).get('/ongs')
    expect(response.ongs);
  });
});

