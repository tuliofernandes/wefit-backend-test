import { Profile } from "@/Domain/Entities";
import { IProfileRepository } from "@/Domain/Protocols";
import { DomainException } from "@/Domain/Exceptions/DomainException";

export class CreateProfileUsecase {
  constructor(private readonly profileRepository: IProfileRepository) {}

  async execute(profile: Profile) {
    const found = await this.profileRepository.findByEmail(profile.getEmail());
    if (found) throw new DomainException("Profile already exists");
    return this.profileRepository.create(profile);
  }
}
