import { Cnpj } from "./Cnpj";

describe("[VO] Cnpj", () => {
  const invalidValues = [
    "",
    "2234523",
    "12.345.678/00001-90",
    "aa.bbb.ccc/ddddd-cc",
    "7".repeat(51),
  ];
  const validValues = [
    "12.345.678/0001-90",
    "98.765.432/0001-21",
    "11.223.344/0001-55",
    "22.334.455/0001-66",
    "12.345.678/0001-90",
    "98.765.432/0001-21",
    "11.223.344/0001-55",
    "99.888.777/0001-44",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Cnpj(value)).toThrow("Invalid CNPJ");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Cnpj(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new Cnpj("12.345.678/0001-90").toString()).toBe(
        "12.345.678/0001-90"
      );
    });
  });
});
