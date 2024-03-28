export class FullName {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new Error("Invalid full name");
  }

  private isValid(value: string): boolean {
    if (value.length < 2 || value.length > 50) return false;
    if (!/^[a-zA-ZÀ-ÖØ-öø-ÿ '.]+$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
