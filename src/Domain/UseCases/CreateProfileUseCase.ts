import { Profile } from "@/Domain/Entities";
import { IProfileRepository } from "@/Domain/Protocols";

export class CreateProfileUseCase {
  constructor(private readonly repository: IProfileRepository) {}

  async execute(profile: Profile) {}
}
