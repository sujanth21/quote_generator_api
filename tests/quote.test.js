const request = require("supertest");
const app = require("../app");

test("Should get all the quotes", async () => {
  await request(app).get("/api/v1/quotes").expect(200);
});

test("Should get a single quote using an ID", async () => {
  await request(app).get("/api/v1/quotes/5f36012d4ec44f44a8a04409").expect(200);
});

test("Should get a random quote", async () => {
  await request(app).get("/api/v1/quotes/random").expect(200);
});
