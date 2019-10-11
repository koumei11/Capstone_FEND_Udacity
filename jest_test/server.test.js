const request = require('supertest');
const app = require('../src/server/server');

describe('Test api', () => {
    test('Get', async () => {
        const response = await request(app).get("/weather/40.71427,-74.00597,1571065200");
        expect(response.statusCode).toBe(200);
    })
});