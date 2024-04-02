import prisma from "@/Infra/Database/PrismaClient";
import { ProfileRepository } from "@/Infra/Repositories/ProfileRepository";
import { InfraException } from "@/Infra/Exceptions/InfraException";

import {
  profileFixtureEntity,
  profileFixtureSchema,
} from "../../../tests/fixtures/Entities/Profile";
import { Email } from "@/Domain/ValueObjects/Profile";

describe("[Repository] ProfileRepository", () => {
  const dbErrorMessage = "Some db internal error";
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
      jest
        .spyOn(prisma.profile, "create")
        .mockRejectedValueOnce(dbErrorMessage);
      sut = makeSut();
      const createPromise = sut.create(profileFixtureEntity);

      await expect(createPromise).rejects.toThrow(
        new InfraException("Error when creating profile")
      );
    });

    it("Should create the profile in the database", async () => {
      const created = await sut.create(profileFixtureEntity);
      const found = await prisma.profile.findUnique({
        where: { id: created.getId().toNumber() },
      });

      expect(found?.email).toEqual(profileFixtureSchema.email);
    });
  });

  describe("findByEmail", () => {
    it("Should throw an error if some error occurs", async () => {
      jest
        .spyOn(prisma.profile, "findUnique")
        .mockRejectedValueOnce(dbErrorMessage);
      sut = makeSut();
      const createPromise = sut.findByEmail(new Email("validemail@gmail.com"));

      await expect(createPromise).rejects.toThrow(
        new InfraException("Error when checking profile")
      );
    });

    it("Should return null if the profile is not found", async () => {
      jest.spyOn(prisma.profile, "findUnique").mockResolvedValueOnce(null);
      const found = await sut.findByEmail(
        new Email("nonexistentemail@gmail.com")
      );

      expect(found).toBeNull();
    });

    it("Should return the profile if it is found", async () => {
      jest
        .spyOn(prisma.profile, "findUnique")
        .mockResolvedValueOnce(profileFixtureSchema);
      const found = await sut.findByEmail(new Email("existentemail@gmail.com"));

      expect(found).toEqual(profileFixtureEntity);
    });
  });

  describe("findByCpf", () => {
    it("Should throw an error if some error occurs", async () => {
      jest
        .spyOn(prisma.profile, "findUnique")
        .mockRejectedValueOnce(dbErrorMessage);
      sut = makeSut();
      const createPromise = sut.findByCpf(profileFixtureEntity.getCpf());

      await expect(createPromise).rejects.toThrow(
        new InfraException("Error when checking profile")
      );
    });

    it("Should return null if the profile is not found", async () => {
      jest.spyOn(prisma.profile, "findUnique").mockResolvedValueOnce(null);
      const found = await sut.findByCpf(profileFixtureEntity.getCpf());

      expect(found).toBeNull();
    });

    it("Should return the profile if it is found", async () => {
      jest
        .spyOn(prisma.profile, "findUnique")
        .mockResolvedValueOnce(profileFixtureSchema);
      const found = await sut.findByCpf(profileFixtureEntity.getCpf());

      expect(found).toEqual(profileFixtureEntity);
    });
  });

  describe("findByCnpj", () => {
    it("Should throw an error if some error occurs", async () => {
      jest
        .spyOn(prisma.profile, "findUnique")
        .mockRejectedValueOnce(dbErrorMessage);
      sut = makeSut();
      const createPromise = sut.findByCnpj(profileFixtureEntity.getCnpj()!);

      await expect(createPromise).rejects.toThrow(
        new InfraException("Error when checking profile")
      );
    });

    it("Should return null if the profile is not found", async () => {
      jest.spyOn(prisma.profile, "findUnique").mockResolvedValueOnce(null);
      const found = await sut.findByCnpj(profileFixtureEntity.getCnpj()!);

      expect(found).toBeNull();
    });

    it("Should return the profile if it is found", async () => {
      jest
        .spyOn(prisma.profile, "findUnique")
        .mockResolvedValueOnce(profileFixtureSchema);
      const found = await sut.findByCnpj(profileFixtureEntity.getCnpj()!);

      expect(found).toEqual(profileFixtureEntity);
    });
  });
});
