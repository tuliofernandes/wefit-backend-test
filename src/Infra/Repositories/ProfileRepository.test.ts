import prisma from "@/Infra/Database/PrismaClient";
import { ProfileRepository } from "@/Infra/Repositories/ProfileRepository";
import { InfraException } from "@/Infra/Exceptions/InfraException";

import {
  profileFixtureEntity,
  profileFixtureSchema,
} from "../../../tests/fixtures/Entities/Profile";

describe("[Repository] ProfileRepository", () => {
  let sut: ProfileRepository;

  const makeSut = (): ProfileRepository => {
    return new ProfileRepository();
  };

  beforeAll(async () => {
    await prisma.$connect();
  });

  beforeEach(() => {
    sut = makeSut();
  });

  afterAll(async () => {
    await prisma.profile.deleteMany();
    await prisma.$disconnect();
  });

  describe("create", () => {
    it("Should throw an error if some error occurs", async () => {
      const dbErrorMessage = "Some db internal error";
      jest
        .spyOn(prisma.profile, "create")
        .mockRejectedValueOnce(dbErrorMessage);
      const infoSpy = jest.spyOn(console, "info");
      sut = makeSut();
      const createPromise = sut.create(profileFixtureEntity);

      await expect(createPromise).rejects.toThrow(
        new InfraException("Error when creating profile")
      );
    });

    it("Should create the profile in the database", async () => {
      const profileId = await sut.create(profileFixtureEntity);
      const found = await prisma.profile.findUnique({
        where: { id: profileId.toNumber() },
      });

      expect(found?.email).toEqual(profileFixtureSchema.email);
    });
  });
});
