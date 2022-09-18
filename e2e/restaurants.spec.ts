import supertest from "supertest";
import { startDockerCompose, stopDockerCompose } from "./utils/docker-setup";
import { sqlQuery } from "./utils/db";

jest.setTimeout(900000); // 15 min

const request = supertest("http://localhost:8080");

describe("restaurant", () => {
  beforeAll(async () => {
    await startDockerCompose();
  });

  afterAll(async () => {
    await stopDockerCompose();
  });

  beforeEach(async () => {
    await sqlQuery("DELETE FROM restaurant");
  });

  it("should get a empty list of restaurant", async () => {
    const response = await request.get("/restaurants");

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should create a new restaurant", async () => {
    const response = await request.post("/restaurants").send({
      name: "test restaurant",
      category: "BAR",
      phoneNumber: "+15141231234",
      address: "sdfasdfasdf",
    });

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual("test restaurant");
    expect(response.body.id).toBeDefined();
  });

  it("should not create a restaurant if name is empty", async () => {
    const response = await request.post("/restaurants").send({
      category: "BAR",
      phoneNumber: "+15141231234",
      address: "sdfasdfasdf",
    });

    expect(response.status).toBe(400);
  });

  it("should not create a restaurant if phone umber is empty", async () => {
    const response = await request.post("/restaurants").send({
      name: "test restaurant",
      category: "BAR",
      address: "sdfasdfasdf",
    });

    expect(response.status).toBe(400);
  });

  it("should not create a restaurant if phone number doesn't respect the format +1xxxxxxxxxx", async () => {
    const response = await request.post("/restaurants").send({
      name: "test restaurant",
      category: "test",
      phoneNumber: "123123123",
      address: "sdfasdfasdf",
    });

    expect(response.status).toBe(400);
  });

  it("should not create a restaurant if the category is not provided", async () => {
    const response = await request.post("/restaurants").send({
      name: "test restaurant",
      phoneNumber: "+15141231234",
      address: "sdfasdfasdf",
    });

    expect(response.status).toBe(400);
  });

  it("should not create a restaurant if the category is not part of the available categories", async () => {
    const response = await request.post("/restaurants").send({
      name: "test restaurant",
      category: "invalid",
      phoneNumber: "+15141231234",
      address: "sdfasdfasdf",
    });

    expect(response.status).toBe(400);
  });

  it("should not create a restaurant if there is more field provided", async () => {
    const response = await request.post("/restaurants").send({
      name: "test restaurant",
      category: "BAR",
      phoneNumber: "+15141231234",
      address: "sdfasdfasdf",
      newField: "null",
    });

    expect(response.status).toBe(400);
  });

  describe("get restaurant", () => {
    it("should get a list of restaurant", () => {
      fail();
    });

    it("should get a list of restaurant with a filter", () => {
      fail();
    });

    it("should throw a 400 if the filter is invalid", () => {
      fail();
    });

    it("should get a restaurant by id", () => {
      fail();
    });

    it("should throw a 404 if the restaurant id is not found", () => {
      fail();
    });
  });
});
