import { InternalServerError } from "@/Presentation/Api/Errors";

export class HttpResponse {
  constructor(
    public readonly statusCode: number,
    public readonly data: any | Error
  ) {}

  static badRequest = (errorMessage: unknown): HttpResponse =>
    new HttpResponse(400, this.createErrorMessage(errorMessage));
  static serverError = (errorMessage: unknown): HttpResponse =>
    new HttpResponse(
      500,
      new InternalServerError(this.createErrorMessage(errorMessage))
    );
  static ok = (data: any): HttpResponse => new HttpResponse(200, data);

  private static createErrorMessage(errorMessage: unknown): Error {
    return errorMessage instanceof Error
      ? errorMessage
      : new Error(String(errorMessage));
  }
}
