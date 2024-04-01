import prisma from "@/Infra/Database/PrismaClient";
import { ProfileRepository } from "@/Infra/Repositories/ProfileRepository";
import { InfraException } from "@/Infra/Exceptions/InfraException";

import { profileFixtureEntity } from "../../../tests/fixtures/Entities/Profile";
import { prismaMock } from "../../../tests/prismaSingleton";

describe("[Repository] ProfileRepository", () => {
  let sut: ProfileRepository;

  const makeSut = (): ProfileRepository => {
    return new ProfileRepository();
  };

  beforeAll(async () => {
    await prismaMock.$connect();
  });

  beforeEach(() => {
    sut = makeSut();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("create", () => {
    it("Should throw an error if some error occurs", async () => {
      const dbErrorMessage = "Some db internal error";

      prismaMock.profile.create.mockRejectedValueOnce(dbErrorMessage);
      const infoSpy = jest.spyOn(console, "info");
      sut = makeSut();
      const createPromise = sut.create(profileFixtureEntity);

      await expect(createPromise).rejects.toThrow(
        new InfraException("Error when creating profile")
      );
      expect(infoSpy).toHaveBeenCalledWith(dbErrorMessage);
    });
  });
});
