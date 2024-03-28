export class Phone {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new Error("Invalid phone number");
  }

  private isValid(value: string): boolean {
    if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
