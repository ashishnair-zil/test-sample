const request = require('supertest');
const {app} = require("../app");

describe('Space test suite', () => {
    it('tests /destinations endpoints', async() => {
        const response = await request(app).get("/");
        expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
        expect(response.body).toHaveLength(4);
        expect(response.statusCode).toBe(200);
        // Testing a single element in the array
        expect(response.body).toEqual(expect.arrayContaining(['Michael']));
    });
});