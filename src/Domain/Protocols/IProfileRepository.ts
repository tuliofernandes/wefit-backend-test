import { Profile } from "@/Domain/Entities";
import { Email, Cpf, Cnpj } from "@/Domain/ValueObjects/Profile";

export interface IProfileRepository {
  create(profile: Profile): Promise<Profile>;
  findByEmail(email: Email): Promise<Profile | null>;
  findByCpf(cpf: Cpf): Promise<Profile | null>;
  findByCnpj(cnpj: Cnpj): Promise<Profile | null>;
}
