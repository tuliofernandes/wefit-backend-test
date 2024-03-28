import { Street } from "./Street";

describe("[VO] Street", () => {
  const invalidValues = ["", "a", "a".repeat(51), "_Av. Paulista"];
  const validValues = [
    "Avenida Paulista",
    "Rua da Consolação",
    "Rua Augusta",
    "Avenida Faria Lima",
    "Avenida Ipiranga",
    "Avenida Rebouças",
    "Avenida Brasil",
    "Rua Eng. Guilherme Cristiano Fender",
    "Rua Dr. Mário Ferraz",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Street(value)).toThrow("Invalid street name");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Street(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new Street("Av. São João").toString()).toBe("Av. São João");
    });
  });
});
