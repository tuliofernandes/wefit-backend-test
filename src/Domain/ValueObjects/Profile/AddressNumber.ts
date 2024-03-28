export class AddressNumber {
  constructor(private readonly value: string | number) {
    if (!this.isValid(value)) throw new Error("Invalid address number");
  }

  private isValid(value: string | number): boolean {
    if (!Number.isInteger(Number(value.toString()))) return false;
    if (Number(value) < 1 || Number(value) > 9999) return false;
    return true;
  }

  toNumber(): number {
    return Number(this.value);
  }

  toString(): string {
    return this.value.toString();
  }
}
