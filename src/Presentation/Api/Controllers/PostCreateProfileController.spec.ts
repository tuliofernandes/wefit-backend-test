import request from "supertest";

import { CreateProfileUsecase } from "@/Domain/Usecases/CreateProfileUsecase";

import { ExpressHttpAdapter } from "@/Presentation/Api/Adapters";
import {
  profileFixtureEntity,
  profileFixtureSchema,
} from "../../../../tests/fixtures/Entities/Profile";

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

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      status: 400,
      body: "Invalid profile type",
    });
  });

  it("Should return 409 if the profile already exists", async () => {
    const conflictErrorMessage = "Profile with the same email already exists";
    jest
      .spyOn(CreateProfileUsecase.prototype, "execute")
      .mockRejectedValueOnce(new Error(conflictErrorMessage));
    const response = await request(testServer)
      .post("/api/profile")
      .send(profileFixtureSchema)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.status).toBe(409);
    expect(response.body).toEqual({
      status: 409,
      body: conflictErrorMessage,
    });
  });

  it("Should return 500 if some internal error occurs", async () => {
    jest
      .spyOn(CreateProfileUsecase.prototype, "execute")
      .mockRejectedValueOnce(new Error("InfraException: Unexpected error"));
    const response = await request(testServer)
      .post("/api/profile")
      .send(profileFixtureSchema)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      status: 500,
      body: "Internal server error",
    });
  });

  it("Should return 201 and the created profile if created successfully", async () => {
    jest
      .spyOn(CreateProfileUsecase.prototype, "execute")
      .mockResolvedValueOnce(profileFixtureEntity);
    const response = await request(testServer)
      .post("/api/profile")
      .send(profileFixtureSchema)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      status: 201,
      body: profileFixtureSchema,
    });
  });
});
