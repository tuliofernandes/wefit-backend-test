import { ProfileId, Cnpj, Cpf, Email } from "@/Domain/ValueObjects/Profile";
import { Profile } from "@/Domain/Entities";
import { IProfileRepository } from "@/Domain/Protocols";

import { InfraException } from "@/Infra/Exceptions/InfraException";
import prismaClient from "@/Infra/Database/PrismaClient";
import { ProfileAdapter } from "@/Infra/Repositories/Adapters/ProfileAdapter";

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

  async findByEmail(email: Email): Promise<Profile | null> {
    try {
      const found = await prismaClient.profile.findUnique({
        where: { email: email.toString() },
      });
      if (!found) return null;
      return ProfileAdapter.toEntity(found);
    } catch (error) {
      throw new InfraException("Error when checking profile");
    }
  }

  async findByCpf(cpf: Cpf): Promise<Profile | null> {
    try {
      const found = await prismaClient.profile.findUnique({
        where: { cpf: cpf.toString() },
      });
      if (!found) return null;
      return ProfileAdapter.toEntity(found);
    } catch (error) {
      throw new InfraException("Error when checking profile");
    }
  }

  async findByCnpj(cnpj: Cnpj): Promise<Profile | null> {
    try {
      const found = await prismaClient.profile.findUnique({
        where: { cnpj: cnpj.toString() },
      });
      if (!found) return null;
      return ProfileAdapter.toEntity(found);
    } catch (error) {
      throw new InfraException("Error when checking profile");
    }
  }
}
