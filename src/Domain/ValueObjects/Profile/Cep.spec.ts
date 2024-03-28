import { Cep } from "./Cep";

describe("[VO] Cep", () => {
  const invalidValues = ["", "999999-999", "9999-999", "aaaaa-bbb"];
  const validValues = [
    "05338-100",
    "18570-000",
    "18570-000",
    "01000-000",
    "20000-000",
    "40000-000",
    "60000-000",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Cep(value)).toThrow("Invalid CEP");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Cep(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new Cep("05338-100").toString()).toBe("05338-100");
    });
  });
});
