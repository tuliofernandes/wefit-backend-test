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
} from "../ValueObjects/Profile";
import { Profile } from "./Profile";
import { ProfileType } from "@/Domain/Enums/ProfileType";
import { DomainException } from "@/Domain/Exceptions/DomainException";

describe("[Entity]: Profile", () => {
  const profileFixtureJson = {
    type: ProfileType.PJ,
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
  const profileFixture = new Profile(
    ProfileType.PJ,
    new Cpf(profileFixtureJson.cpf),
    new Cnpj(profileFixtureJson.cnpj),
    new FullName(profileFixtureJson.name),
    new Phone(profileFixtureJson.cellPhone),
    new Phone(profileFixtureJson.phone),
    new Email(profileFixtureJson.email),
    new Cep(profileFixtureJson.cep),
    new Street(profileFixtureJson.street),
    new AddressNumber(profileFixtureJson.addressNumber),
    new AddressComplement(profileFixtureJson.addressComplement),
    new Neighborhood(profileFixtureJson.neighborhood),
    new City(profileFixtureJson.city),
    new Uf(profileFixtureJson.uf)
  );

  describe("validation", () => {
    it("Should throw DomainException if ProfileType is PJ but no CNPJ is provided", () => {
      expect(
        () =>
          new Profile(
            ProfileType.PJ,
            new Cpf(profileFixtureJson.cpf),
            null,
            new FullName(profileFixtureJson.name),
            new Phone(profileFixtureJson.cellPhone),
            new Phone(profileFixtureJson.phone),
            new Email(profileFixtureJson.email),
            new Cep(profileFixtureJson.cep),
            new Street(profileFixtureJson.street),
            new AddressNumber(profileFixtureJson.addressNumber),
            new AddressComplement(profileFixtureJson.addressComplement),
            new Neighborhood(profileFixtureJson.neighborhood),
            new City(profileFixtureJson.city),
            new Uf(profileFixtureJson.uf)
          )
      ).toThrow(new DomainException("CNPJ is required for PJ profiles"));
    });
  });

  describe("methods", () => {
    it("toJson should return the JSON representation of the entity", () => {
      expect(profileFixture.toJson()).toEqual(profileFixtureJson);
    });
  });
});
