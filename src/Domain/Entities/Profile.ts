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
  ProfileId,
  Street,
  Type,
  Uf,
} from "@/Domain/ValueObjects/Profile";

export type ProfileSchema = {
  id: number;
  type: string;
  cpf: string;
  cnpj?: string;
  name: string;
  cellPhone: string;
  phone: string;
  email: string;
  cep: string;
  street: string;
  addressNumber: string;
  addressComplement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export class Profile {
  constructor(
    private readonly id: ProfileId,
    private readonly type: Type,
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
    if (this.type.toString() === ProfileType.PJ && !this.cnpj)
      throw new DomainException("CNPJ is required for PJ profiles");
    if (this.type.toString() === ProfileType.PF && this.cnpj)
      throw new DomainException("CNPJ is not required for PF profiles");
  }

  public getType(): Type {
    return this.type;
  }

  public getId(): ProfileId {
    return this.id;
  }

  public getEmail(): Email {
    return this.email;
  }

  public getCpf(): Cpf {
    return this.cpf;
  }

  public getCnpj(): Cnpj | null {
    return this.cnpj;
  }

  public toJson(): ProfileSchema {
    return {
      id: this.id.toNumber(),
      type: this.type.toString(),
      cpf: this.cpf.toString(),
      cnpj: this.cnpj?.toString(),
      name: this.name.toString(),
      cellPhone: this.cellPhone.toString(),
      phone: this.phone.toString(),
      email: this.email.toString(),
      cep: this.cep.toString(),
      street: this.street.toString(),
      addressNumber: this.addressNumber.toString(),
      addressComplement: this.addressComplement.toString(),
      neighborhood: this.neighborhood.toString(),
      city: this.city.toString(),
      uf: this.uf.toString(),
    };
  }
}
