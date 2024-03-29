import request from "supertest";

import { ExpressHttpAdapter } from "@/Presentation/Api/Adapters";

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

  const profileFixtureJson = {
    type: "PJ",
    cpf: "123.456.789-00",
    cnpj: "12.345.678/0001-90",
    name: "Empresa Teste",
    cellPhone: "(14) 99999-9999",
    phone: "(14) 9999-9999",
    email: "department@company.com",
    cep: "18570-000",
    street: "Rua Afonso Athanázio",
    addressNumber: "270",
    addressComplement: "Bl 5 apto 82",
    neighborhood: "Jd. Letícia",
    city: "Conchas",
    uf: "SP",
  };

  it("Should return 400 on invalid values", async () => {
    const response = await request(testServer)
      .post("/api/profile")
      .send({ ...profileFixtureJson, type: "invalid_type" })
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body).toEqual({
      status: 400,
      body: "Invalid profile type",
    });
  });
});
