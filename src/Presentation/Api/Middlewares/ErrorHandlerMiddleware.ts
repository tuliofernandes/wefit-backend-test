import { NextFunction, Response } from "express";

export default class ErrorHandlerMiddleware {
  handler(
    errorInfo: any,
    request: any,
    response: Response,
    _next: NextFunction
  ): void {
    try {
      if (errorInfo.name.includes("DomainException")) {
        response.status(400).send({
          status: 400,
          body: errorInfo.message,
        });
      }
      if (errorInfo.message.includes("exists")) {
        response.status(409).send({
          status: 409,
          body: errorInfo.message,
        });
      }

      response.status(500).send({
        status: 500,
        body: "Internal server error",
      });
    } catch (error) {
      console.info(error); // Log the error internally for further analysis
      response.status(500).send({
        error: "Internal server error",
      });
    }
  }
}
