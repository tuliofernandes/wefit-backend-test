import { City } from "./City";

describe("[VO] FullName", () => {
  const invalidValues = ["", "a", "a".repeat(51), "$$Conchas", ""];
  const validValues = [
    "São Paulo",
    "Rio de Janeiro",
    "Curitiba",
    "Apucarana",
    "Londrina",
    "Salvador",
    "Fortaleza",
    "Belo Horizonte",
    "Recife",
    "Porto Alegre",
    "Manaus",
    "Belém",
    "Goiânia",
    "São Luís",
    "Maceió",
    "Holambra",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new City(value)).toThrow("Invalid city name");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new City(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new City("John Doe").toString()).toBe("John Doe");
    });
  });
});
