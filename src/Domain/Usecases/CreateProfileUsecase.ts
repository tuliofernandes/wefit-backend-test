import { Profile } from "@/Domain/Entities";
import { IProfileRepository } from "@/Domain/Protocols";
import { DomainException } from "@/Domain/Exceptions/DomainException";
import { ProfileType } from "@/Domain/Enums/ProfileType";

export class CreateProfileUsecase {
  constructor(private readonly profileRepository: IProfileRepository) {}

  async execute(profile: Profile) {
    const profileIsPj = profile.getType().toString() === ProfileType.PJ;
    const [foundByEmail, foundByCpf, foundByCnpj] = await Promise.all([
      this.profileRepository.findByEmail(profile.getEmail()),
      this.profileRepository.findByCpf(profile.getCpf()),
      profileIsPj && this.profileRepository.findByCnpj(profile.getCnpj()!),
    ]);

    if (foundByEmail)
      throw new DomainException("Profile with the same email already exists");
    if (foundByCpf)
      throw new DomainException("Profile with the same CPF already exists");
    if (profileIsPj && foundByCnpj)
      throw new DomainException("Profile with the same CNPJ already exists");

    return this.profileRepository.create(profile);
  }
}
