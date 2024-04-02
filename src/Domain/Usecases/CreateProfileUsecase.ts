import { Profile } from "@/Domain/Entities";
import { IProfileRepository } from "@/Domain/Protocols";
import { DomainException } from "@/Domain/Exceptions/DomainException";

export class CreateProfileUsecase {
  constructor(private readonly profileRepository: IProfileRepository) {}

  async execute(profile: Profile): Promise<Profile> {
    await Promise.all([
      this.checkIfExistsByEmail(profile),
      this.checkIfExistsByCpf(profile),
      this.checkIfExistsByCnpj(profile),
    ]);
    return await this.profileRepository.create(profile);
  }

  private async checkIfExistsByEmail(profile: Profile) {
    const found = await this.profileRepository.findByEmail(profile.getEmail());
    if (found)
      throw new DomainException("Profile with the same email already exists");
  }

  private async checkIfExistsByCpf(profile: Profile) {
    const found = await this.profileRepository.findByCpf(profile.getCpf());
    if (found)
      throw new DomainException("Profile with the same CPF already exists");
  }

  private async checkIfExistsByCnpj(profile: Profile) {
    if (!this.isProfileTypePj(profile)) return;
    const found = await this.profileRepository.findByCnpj(profile.getCnpj()!); // The Profile Entity has a nullable Cnpj, but we know it's not null here, since the class is already validating it in case of a PJ profile
    if (found)
      throw new DomainException("Profile with the same CNPJ already exists");
  }

  private isProfileTypePj(profile: Profile) {
    return profile.getType().toString() === "PJ";
  }
}
