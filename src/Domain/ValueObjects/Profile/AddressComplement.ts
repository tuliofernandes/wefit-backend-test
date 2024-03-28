export class AddressComplement {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new Error("Invalid address complement");
  }

  private isValid(value: string): boolean {
    const regex = /^[a-zA-Z0-9\s().,-]{2,25}$/;
    return regex.test(value);
  }

  toString(): string {
    return this.value;
  }
}
