import request from "supertest";

import { ExpressHttpAdapter } from "@/Presentation/Api/Adapters";
import { profileFixtureSchema } from "../../../../tests/fixtures/Entities/Profile";

describe("[Controller] PostCreateProfileController", () => {
  let expressAdapter: ExpressHttpAdapter;
  let testServer: any;

  beforeAll(async () => {
    expressAdapter = new ExpressHttpAdapter();
    testServer = await expressAdapter.startup(4568);
  });

  afterAll(async () => {
    testServer.close();
  });

  it("Should return 400 on invalid values", async () => {
    const response = await request(testServer)
      .post("/api/profile")
      .send({ ...profileFixtureSchema, type: "invalid_type" })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      status: 400,
      body: "Invalid profile type",
    });
  });
});
