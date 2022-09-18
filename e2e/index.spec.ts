import supertest from "supertest";
import { loadSqlData } from "./utils/db";
import { startDockerCompose, stopDockerCompose } from "./utils/docker-setup";
import path from "path";

jest.setTimeout(900000); // 15 min

const request = supertest("http://localhost:8080");

describe("GET /", () => {
  beforeAll(async () => {
    await startDockerCompose();
    await loadSqlData(path.join(process.cwd(), "/e2e/restaurant.sql"));
  });

  afterAll(async () => {
    await stopDockerCompose();
  });

  it("responds with text", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
