export class Uf {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new Error("Invalid UF");
  }

  private isValid(value: string): boolean {
    if (!/^[A-Z]{2}$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
