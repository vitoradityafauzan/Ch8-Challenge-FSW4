/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../../../app");
// const { Car } = require("../../../../../app/models");

// Function for testing endpoint login
describe("POST /v1/auth/login", () => {
  // State what the response should be if status code 201
  it("should response with 201 as status code and res.json with newly car's instance", async () => {
    const email = "soulcairn@gmail.com";
    const password = "test";

    return (
      request(app)
        // Requesting endpoint
        .post("/v1/auth/login")
        .set("Content-Type", "application/json")
        .send({ email, password })
        .then((res) => {
          // Enpoint's responses expectation
          expect(res.statusCode).toBe(201);
          expect(res.body).toEqual(
            expect.objectContaining({
              accessToken: expect.any(String),
            })
          );
        })
    );
  });

  // State what the response should be if status code 404
  it("should response with 404 as status code", async () => {
    const email = "nonExistent@gmail.com";
    const password = "not";

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: expect.any(Object),
          })
        );
      });
  });

  // State what the response should be if status code 401
  it("should response with 401 as status code", async () => {
    const email = "soulcairn@gmail.com";
    const password = "not";

    return request(app)
      .post("/v1/auth/login")
      .set("Content-Type", "application/json")
      .send({ email, password })
      .then((res) => {
        expect(res.statusCode).toBe(401);
        expect(res.body).toEqual(
          expect.objectContaining({
            error: expect.any(Object),
          })
        );
      });
  });
});
