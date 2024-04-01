import { Profile } from "@/Domain/Entities";
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

export const profileFixtureSchema = {
  type: "PJ",
  cpf: "123.456.789-00",
  cnpj: "12.345.678/0001-90",
  name: "Empresa Teste",
  cellPhone: "(14) 99999-9999",
  phone: "(14) 9999-9999",
  email: "department@company.com",
  cep: "18570-000",
  street: "Rua Afonso Athanázio",
  addressNumber: "270",
  addressComplement: "Bl 5 apto 82",
  neighborhood: "Jd. Letícia",
  city: "Conchas",
  uf: "SP",
};

export const profileFixtureEntity = new Profile(
  new Type(profileFixtureSchema.type),
  new Cpf(profileFixtureSchema.cpf),
  new Cnpj(profileFixtureSchema.cnpj),
  new FullName(profileFixtureSchema.name),
  new Phone(profileFixtureSchema.cellPhone),
  new Phone(profileFixtureSchema.phone),
  new Email(profileFixtureSchema.email),
  new Cep(profileFixtureSchema.cep),
  new Street(profileFixtureSchema.street),
  new AddressNumber(profileFixtureSchema.addressNumber),
  new AddressComplement(profileFixtureSchema.addressComplement),
  new Neighborhood(profileFixtureSchema.neighborhood),
  new City(profileFixtureSchema.city),
  new Uf(profileFixtureSchema.uf)
);
