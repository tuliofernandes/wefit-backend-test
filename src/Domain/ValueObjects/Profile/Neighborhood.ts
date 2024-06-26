import { DomainException } from "@/Domain/Exceptions/DomainException";

export class Neighborhood {
  constructor(private readonly value: string) {
    if (!this.isValid(value))
      throw new DomainException("Invalid neighborhood name");
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
