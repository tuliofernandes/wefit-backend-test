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
  ProfileId,
  Street,
  Type,
  Uf,
} from "@/Domain/ValueObjects/Profile";

export class ProfileAdapter {
  static toEntity(profile: Schema): Entity {
    return new Entity(
      new ProfileId(profile.id),
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

  static toSchema(profile: Entity): Schema {
    const entityJson = profile.toJson();
    delete (entityJson as any).id;
    return entityJson as Schema;
  }
}
