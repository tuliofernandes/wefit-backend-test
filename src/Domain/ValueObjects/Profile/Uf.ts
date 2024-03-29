import { DomainException } from "@/Domain/Exceptions/DomainException";

export class Uf {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new DomainException("Invalid UF");
  }

  private isValid(value: string): boolean {
    if (!/^[A-Z]{2}$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
