export class Cep {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new Error("Invalid CEP");
  }

  private isValid(value: string): boolean {
    if (!/^\d{5}-\d{3}$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
