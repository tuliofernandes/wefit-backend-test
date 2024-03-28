import { AddressComplement } from "./AddressComplement";

describe("[VO] AddressComplement", () => {
  const invalidValues = ["", "a", "a".repeat(51), "J", "* Bloco 5, apto 302"];
  const validValues = [
    "Apto. 82 bl. 7",
    "Bloco 5, apto 302",
    "bl 8 apto 302",
    "Apt 3B",
    "Suite 200",
    "Sunset Towers",
    "12345-6789",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new AddressComplement(value)).toThrow(
          "Invalid address complement"
        );
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new AddressComplement(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new AddressComplement("Suite 200").toString()).toBe("Suite 200");
    });
  });
});
