import supertest from "supertest";
import { startDockerCompose, stopDockerCompose } from "./utils/docker-setup";

jest.setTimeout(900000); // 15 min

const request = supertest("http://localhost:8080");

beforeAll(async () => {
  await startDockerCompose();
});

afterAll(async () => {
  await stopDockerCompose();
});

describe("GET /", () => {
  it("responds with text", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
