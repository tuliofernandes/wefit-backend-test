import { ProfileId } from "./ProfileId";

describe("[VO] ProfileId", () => {
  const invalidValues = [-1, 0, 99999999999];
  const validValues = [1, 2, 3, 19, 9999999998];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new ProfileId(value)).toThrow("Invalid profile id");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new ProfileId(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toNumber should return the value", () => {
      expect(new ProfileId(5).toNumber()).toBe(5);
    });
  });
});
