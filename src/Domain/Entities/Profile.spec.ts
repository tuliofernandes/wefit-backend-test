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
import { Profile } from "@/Domain/Entities/Profile";
import { DomainException } from "@/Domain/Exceptions/DomainException";
import { ProfileType } from "@/Domain/Enums/ProfileType";

import {
  profileFixtureEntity,
  profileFixtureSchema,
} from "../../../tests/fixtures/Entities/Profile";

describe("[Entity]: Profile", () => {
  describe("validation", () => {
    it("Should throw DomainException if ProfileType is PJ but no CNPJ is provided", () => {
      expect(
        () =>
          new Profile(
            new ProfileId(profileFixtureSchema.id),
            new Type(profileFixtureSchema.type),
            new Cpf(profileFixtureSchema.cpf),
            null,
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
          )
      ).toThrow(new DomainException("CNPJ is required for PJ profiles"));
    });

    it("Should throw DomainException if ProfileType is PF but CNPJ is provided", () => {
      expect(
        () =>
          new Profile(
            new ProfileId(profileFixtureSchema.id),
            new Type(ProfileType.PF),
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
          )
      ).toThrow(new DomainException("CNPJ is not required for PF profiles"));
    });
  });

  describe("methods", () => {
    it("toJson should return the JSON representation of the entity", () => {
      expect(profileFixtureEntity.toJson()).toEqual(profileFixtureSchema);
    });
  });
});
