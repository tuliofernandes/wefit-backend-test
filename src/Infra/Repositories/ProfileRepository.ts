import { ProfileId } from "@/Domain/ValueObjects/Profile";
import { Profile } from "@/Domain/Entities";
import { IProfileRepository } from "@/Domain/Protocols";

import { InfraException } from "@/Infra/Exceptions/InfraException";
import prismaClient from "@/Infra/Database/PrismaClient";

export class ProfileRepository implements IProfileRepository {
  async create(profile: Profile): Promise<ProfileId> {
    try {
      const created = await prismaClient.profile.create({
        data: profile.toJson(),
      });
      return new ProfileId(created.id);
    } catch (error) {
      // Process the error internally as needed
      throw new InfraException("Error when creating profile"); // Return a generic error message to the client
    }
  }
}
