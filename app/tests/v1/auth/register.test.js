/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../../../../app");
// const { userDe } = require("../../../../app/models/user");

// Function for testing endpoint register
describe("POST /v1/auth/register", () => {
  // State what the response should be if status code 201
  it("should response with 201 as status code and should response ", async () => {
    const name = "Testing Account";
    // const email = "theSmartest@SDN.com";
    const email = `test${Math.random().toString().substring(12)}@testing.com`;
    const password = "test";

    return request(app)
      .post("/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ name, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(201);
        expect(res.body).toEqual(
          expect.objectContaining({
            accessToken: expect.any(String),
          })
        );
      });
  });

  // State what the response should be if status code default/500
  it("should response with default/500 as status code", async () => {
    const name = {};
    const email = {};
    const password = {};

    return request(app)
      .post("/v1/auth/register")
      .set("Content-Type", "application/json")
      .send({ name, email, password })
      .then((res) => {
        expect(res.statusCode).toBe(500);
        expect(res.body).toEqual(expect.any(Object));
        // expect(res.body).toEqual(
        //   expect.objectContaining({
        //     error: {
        //       code: expect.any(String),
        //       message: expect.any(String),
        //       details: expect.arrayContaining([expect.any(Object)]),
        //     },
        //   })
        // );
      });
  });
});
