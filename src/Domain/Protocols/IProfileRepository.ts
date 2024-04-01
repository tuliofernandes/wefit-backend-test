import { Profile } from "@/Domain/Entities";
import { Cnpj, Cpf } from "@/Domain/ValueObjects/Profile";

export interface IProfileRepository {
  // findByCpf(cpf: Cpf): Promise<Profile | null>;
  // findByCnpj(cnpj: Cnpj): Promise<Profile | null>;
  create(profile: Profile): Promise<Profile>;
}
