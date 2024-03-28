import { Phone } from "./Phone";

describe("[VO] Phone", () => {
  const invalidValues = ["", "2234523", "(11) 9989700-8139", "(aa) bbbbb-cccc"];
  const validValues = [
    "(11) 99897-8139",
    "(21) 88888-8888",
    "(31) 77777-7777",
    "(41) 66666-6666",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Phone(value)).toThrow("Invalid phone number");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Phone(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new Phone("(11) 99897-8139").toString()).toBe("(11) 99897-8139");
    });
  });
});
