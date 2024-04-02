import { NextFunction, Response } from "express";

export default class ErrorHandlerMiddleware {
  handler(
    errorInfo: any,
    request: any,
    response: Response,
    _next: NextFunction
  ): void {
    try {
      let status = 500;
      let body = "Internal server error";

      if (errorInfo.name.includes("DomainException")) {
        status = 400;
        body = errorInfo.message;
      }
      if (errorInfo.message.includes("exists")) {
        status = 409;
        body = errorInfo.message;
      }

      response.status(status).send({
        status,
        body,
      });
    } catch (error) {
      console.info(error); // Log the error internally for further analysis
      response.status(500).send({
        error: "Internal server error",
      });
    }
  }
}
