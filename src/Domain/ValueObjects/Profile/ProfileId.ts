import { DomainException } from "@/Domain/Exceptions/DomainException";

export class ProfileId {
  constructor(private readonly value: number) {
    if (!value || !this.isValid())
      throw new DomainException("Invalid profile id");
  }

  isValid(): boolean {
    return this.value > 0 && this.value < 9999999999;
  }

  toNumber(): number {
    return this.value;
  }
}
