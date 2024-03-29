import { DomainException } from "@/Domain/Exceptions/DomainException";

export class AddressComplement {
  constructor(private readonly value: string) {
    if (!this.isValid(value))
      throw new DomainException("Invalid address complement");
  }

  private isValid(value: string): boolean {
    const regex = /^[a-zA-Z0-9\s().,-]{2,25}$/;
    return regex.test(value);
  }

  toString(): string {
    return this.value;
  }
}
