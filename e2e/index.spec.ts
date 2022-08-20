import supertest from "supertest";
import compose from "docker-compose";
import path from "path";
jest.setTimeout(900000); // 15 min

const request = supertest("http://localhost:8080");

beforeAll(async () => {
  try {
    await compose.upAll({ cwd: path.join(__dirname), log: true });
    await new Promise((r) => setTimeout(r, 5000));
  } catch (e) {
    console.log(e);
  }
});

afterAll(async () => {
  try {
    await new Promise((r) => setTimeout(r, 5000));
    await compose.down();
  } catch (e) {
    console.log(e);
  }
});

describe("GET /", () => {
  it("responds with text", async () => {
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.text).toBe("Hello world");
  });
});
