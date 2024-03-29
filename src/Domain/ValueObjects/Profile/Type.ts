import { ProfileType } from "@/Domain/Enums/ProfileType";
import { DomainException } from "@/Domain/Exceptions/DomainException";

export class Type {
  constructor(private readonly value: string) {
    if (!this.isValid(value)) throw new DomainException("Invalid profile type");
    this.value = value.toUpperCase();
  }

  private isValid(value: string): boolean {
    if (!["PF", "pf", "PJ", "pj"].includes(value)) return false;
    return true;
  }

  toString(): string {
    return this.value;
  }
}
