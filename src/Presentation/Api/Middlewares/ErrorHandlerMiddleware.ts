import { NextFunction, Response } from "express";

export default class ErrorHandlerMiddleware {
  handler(
    errorInfo: any,
    request: any,
    response: Response,
    _next: NextFunction
  ): void {
    try {
      const httpResponse = request.httpResponse;
      let status = httpResponse?.statusCode || 500;
      const name = errorInfo.name;
      const message = errorInfo.message;

      if (name.includes("DomainException")) status = 400;

      console.log(errorInfo); // Print both name and message to the console

      response.status(status).send({
        status,
        body: message,
      });
    } catch (error) {
      console.log(error);

      response.status(500).send({
        error: "Internal server error",
      });
    }
  }
}
