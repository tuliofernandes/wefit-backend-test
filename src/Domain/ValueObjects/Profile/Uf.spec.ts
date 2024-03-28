import { Uf } from "./Uf";

describe("[VO] Uf", () => {
  const invalidValues = ["", "RDJ", "Rio de Janeiro"];
  const validValues = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
    "TX",
    "NY",
  ];

  describe("validation", () => {
    invalidValues.forEach((value) => {
      it(`Should throw on invalid value "${value}"`, () => {
        expect(() => new Uf(value)).toThrow("Invalid UF");
      });
    });

    validValues.forEach((value) => {
      it(`Should not throw on valid value "${value}"`, () => {
        expect(() => new Uf(value)).not.toThrow();
      });
    });
  });

  describe("methods", () => {
    it("toString should return the value", () => {
      expect(new Uf("SP").toString()).toBe("SP");
    });
  });
});
