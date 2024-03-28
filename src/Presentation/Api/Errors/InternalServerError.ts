export class InternalServerError extends Error {
  constructor(error: Error) {
    super("Internal server error. Try again soon.");
    this.name = "InternalServerError";
    this.stack = error.stack;
  }
}
