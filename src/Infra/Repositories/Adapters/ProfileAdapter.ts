import { Profile as Schema } from "@prisma/client";

import { Profile as Entity } from "@/Domain/Entities";
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
  Type,
  Uf,
} from "@/Domain/ValueObjects/Profile";

export class ProfileAdapter {
  static toEntity(profile: Schema): Entity {
    return new Entity(
      new Type(profile.type),
      new Cpf(profile.cpf),
      profile.cnpj ? new Cnpj(profile.cnpj) : null,
      new FullName(profile.name),
      new Phone(profile.cellPhone),
      new Phone(profile.phone),
      new Email(profile.email),
      new Cep(profile.cep),
      new Street(profile.street),
      new AddressNumber(profile.addressNumber),
      new AddressComplement(profile.addressComplement),
      new Neighborhood(profile.neighborhood),
      new City(profile.city),
      new Uf(profile.uf)
    );
  }

  // static toSchema(profile: Entity): Schema {
  //   return {
  //     type: profile.
  //     cpf: profile.cpf.value,
  //     cnpj: profile.cnpj?.value,
  //     name: profile.name.value,
  //     cellPhone: profile.cellPhone.value,
  //     phone: profile.phone.value,
  //     email: profile.email.value,
  //     cep: profile.cep.value,
  //     street: profile.street.value,
  //     addressNumber: profile.addressNumber.value,
  //     addressComplement: profile.addressComplement.value,
  //     neighborhood: profile.neighborhood.value,
  //     city: profile.city.value,
  //     uf: profile.uf.value,
  //     createdAt:
  //   };
  // }
}
