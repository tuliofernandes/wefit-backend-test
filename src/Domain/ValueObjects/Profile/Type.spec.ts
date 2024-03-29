import { DomainException } from "@/Domain/Exceptions/DomainException";
import { Type } from "./Type";

describe("[VO] Type", () => {
  const invalidValues = ["", "CPF", "CNPJ", "Pessoa Física", "Pessoa Jurídica"];
  const validValues = ["PJ", "pj", "PF", "pf"];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Type(value)).toThrow(
          new DomainException("Invalid profile type")
        );
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Type(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value in upper case", () => {
      expect(new Type("pj").toString()).toBe("PJ");
      expect(new Type("pf").toString()).toBe("PF");
    });
  });
});
