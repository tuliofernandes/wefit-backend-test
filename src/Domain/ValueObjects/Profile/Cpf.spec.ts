import { Cpf } from "./Cpf";

describe("[VO] Cpf", () => {
  const invalidValues = [
    "",
    "2234523",
    "433.577.33-53",
    "aaa.bbb.ccc-dd",
    "7".repeat(51),
  ];
  const validValues = [
    "433.577.333-53",
    "123.456.789-09",
    "111.222.333-96",
    "999.999.999-99",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Cpf(value)).toThrow("Invalid CPF");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Cpf(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new Cpf("455.877.372-58").toString()).toBe("455.877.372-58");
    });
  });
});
