const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach( async () => {
   await connection.migrate.rollback();
   await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  })

  it('should be able to create a new Incidents', async () => {
    const response = await request(app).post('/incidents').send({
      title: "case",
	    description: "accident",
	    value: 120,
    });
    expect(response.body)
    expect(response.body.id)
  });
});

