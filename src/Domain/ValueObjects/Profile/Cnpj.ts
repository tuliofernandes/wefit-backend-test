import { DomainException } from "@/Domain/Exceptions/DomainException";

export class Cnpj {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new DomainException("Invalid CNPJ");
  }

  private isValid(value: string): boolean {
    if (!/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
