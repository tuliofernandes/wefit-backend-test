export class Cpf {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new Error("Invalid CPF");
  }

  private isValid(value: string): boolean {
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
