import { AddressNumber } from "./AddressNumber";

describe("[VO] AddressNumber", () => {
  const invalidValues = [-55, 0, 10000];
  const validValues = [1, 0o1, 55, 9999, "1", "55", "9999"];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new AddressNumber(value)).toThrow(
          "Invalid address number"
        );
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new AddressNumber(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the string value", () => {
      expect(new AddressNumber(55).toString()).toBe("55");
    });

    it("toNumber should return the numeric value", () => {
      expect(new AddressNumber("55").toNumber()).toBe(55);
    });
  });
});
