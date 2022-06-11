/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../../../app");
// const { Car } = require("../../../../../app/models");

// Function for testing endpoint list car
describe("GET /v1/cars", () => {
  // State what the response should be if status code 201
  it("should response with 201 as status code", async () => {
    return request(app)
      .get("/v1/cars")
      .then((res) => {
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            cars: expect.arrayContaining([expect.any(Object)]),
            meta: expect.objectContaining({
              pagination: expect.any(Object),
            }),
          })
        );
      });
  });
});
