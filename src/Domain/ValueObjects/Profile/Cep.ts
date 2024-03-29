import { DomainException } from "@/Domain/Exceptions/DomainException";

export class Cep {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new DomainException("Invalid CEP");
  }

  private isValid(value: string): boolean {
    if (!/^\d{5}-\d{3}$/.test(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
