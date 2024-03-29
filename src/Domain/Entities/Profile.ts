import { DomainException } from "@/Domain/Exceptions/DomainException";
import { ProfileType } from "@/Domain/Enums/ProfileType";
import {
  AddressComplement,
  AddressNumber,
  Cep,
  City,
  Cnpj,
  Cpf,
  Email,
  FullName,
  Neighborhood,
  Phone,
  Street,
  Uf,
} from "@/Domain/ValueObjects/Profile";

export class Profile {
  constructor(
    private readonly type: ProfileType,
    private readonly cpf: Cpf,
    private readonly cnpj: Cnpj | null,
    private readonly name: FullName,
    private readonly cellPhone: Phone,
    private readonly phone: Phone,
    private readonly email: Email,
    private readonly cep: Cep,
    private readonly street: Street,
    private readonly addressNumber: AddressNumber,
    private readonly addressComplement: AddressComplement,
    private readonly neighborhood: Neighborhood,
    private readonly city: City,
    private readonly uf: Uf
  ) {
    if (this.type === ProfileType.PJ && !this.cnpj)
      throw new DomainException("CNPJ is required for PJ profiles");
  }
}
