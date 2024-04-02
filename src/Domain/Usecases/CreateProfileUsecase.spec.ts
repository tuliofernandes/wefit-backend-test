import { DomainException } from "@/Domain/Exceptions/DomainException";
import { CreateProfileUsecase } from "@/Domain/Usecases/CreateProfileUsecase";

import { ProfileRepository } from "@/Infra/Repositories/ProfileRepository";

import { profileFixtureEntity } from "../../../tests/fixtures/Entities/Profile";

describe("[Usecase] CreateProfileUsecase", () => {
  const profileRepository = new ProfileRepository();

  it("Should throw an error if user already exists", () => {
    jest
      .spyOn(profileRepository, "findByEmail")
      .mockResolvedValueOnce(profileFixtureEntity);
    const sut = new CreateProfileUsecase(profileRepository);
    const createPromise = sut.execute(profileFixtureEntity);

    expect(createPromise).rejects.toThrow(
      new DomainException("Profile already exists")
    );
  });
});
