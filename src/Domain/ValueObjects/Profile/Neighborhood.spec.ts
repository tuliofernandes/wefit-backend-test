import { Neighborhood } from "./Neighborhood";

describe("[VO] Neighborhood", () => {
  const invalidValues = ["", "a", "a".repeat(51), "_Botafogo"];
  const validValues = [
    "Pinheiros",
    "Vila Madalena",
    "Jardim Paulista",
    "Jardim Europa",
    "Jardim América",
    "Jaguaré",
    "Catete",
    "Copacabana",
    "Ipanema",
    "Leblon",
    "Botafogo",
    "Jardim Hebrom",
    "Vila Leopoldina",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Neighborhood(value)).toThrow(
          "Invalid neighborhood name"
        );
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Neighborhood(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new Neighborhood("John Doe").toString()).toBe("John Doe");
    });
  });
});
