/* eslint-disable no-undef */
// const { INTEGER } = require("sequelize/types");
const request = require("supertest");
const app = require("../../../../../app");
const { Car } = require("../../../../../app/models");

// Function for testing endpoint getCar
describe("GET /v1/cars/:id", () => {
  // To create dummy data for testing before every 'it' method
  let car;
  
  beforeEach(async () => {
    // const createdAt = "2022-06-06T13:12:10.734Z";
    // const updatedAt = "2022-06-06T13:12:10.734Z";
    // let createdAt= expect.any(String);
    // let updatedAt=expect.any(String);
    // const userCar = null;

    /*
    car = await Car.create({
      id: 103,
      name: "Mobile Operation Truck",
      price: 5000000,
      size: "LARGE",
      image: "https://source.unsplash.com/519x519",
      isCurrentlyRented: false,
      createdAt: "2022-06-06T13:12:10.734Z",
      updatedAt: "2022-06-06T13:12:10.734Z",
      usercar: {
        id: 0,
        carId: 0,
        userId: 0,
        rentStartedAt: "2022-06-07T13:34:13.159Z",
        rentEndedAt: "2022-06-07T13:34:13.159Z",
        createdAt: "2022-06-07T13:34:13.159Z",
        updatedAt: "2022-06-07T13:34:13.159Z",
      },
    });
    */

    jest.setTimeout(10000);
    const id = 200;
    const name = "Mobile Command Center";
    const price = 5000000;
    const size = "LARGE";
    const image = "https://source.unsplash.com/519x519";
    const isCurrentlyRented = false;

    // Creating Dummy Data
    car = await Car.create({
      id,
      name,
      price,
      size,
      image,
      isCurrentlyRented,
    });

    return car;
  });

  // afterEach(() => car.destroy({ where: { id: 103 } }));
  // Delete dummy data after every 'it' method
  afterEach(() => car.destroy());

  // Method to state what the response from tested endpoint should've done
  it("should response with 200 as status code and res.json with newly car's instance", async () => {
    return request(app)
      // Requesting endpoint
      .get("/v1/cars/" + car.id)
      .then((res) => {
        // Enpoint's responses expectation
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(
          expect.objectContaining({
            id: car.id,
            name: car.name,
            price: car.price,
            size: car.size,
            image: car.image,
            isCurrentlyRented: car.isCurrentlyRented,
            createdAt: expect.any(String),
            updatedAt: expect.any(String),
            // usercar: expect.any(Object),
          })
        );
      });
  });
});
