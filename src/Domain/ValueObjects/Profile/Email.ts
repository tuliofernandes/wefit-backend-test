export class Email {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new Error("Invalid email");
  }

  private isValid(value: string): boolean {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return emailRegex.test(value);
  }

  public toString(): string {
    return this.value;
  }
}
