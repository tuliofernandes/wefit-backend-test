export class DomainException extends Error {
  constructor(message: string) {
    super(`DomainException: ${message}`);
    this.name = "DomainException";
  }
}
