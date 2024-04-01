import prismaClient from "@/Infra/Database/PrismaClient";

import { Profile } from "@/Domain/Entities";
import { IProfileRepository } from "@/Domain/Protocols";

import { InfraException } from "@/Infra/Exceptions/InfraException";

export class ProfileRepository implements IProfileRepository {
  async create(profile: Profile): Promise<Profile> {
    try {
      const created = await prismaClient.profile.create({
        data: profile.toJson(),
      });
      return profile;
    } catch (error) {
      console.info(error); // Log the full error internally
      throw new InfraException("Error when creating profile");
    }
  }
}
