import { RequestHandler } from "express";

import { IController } from "@/Presentation/Api/Protocols/IController";

type HttpRequest = {
  body?: any;
};

export const HandleRequestMiddleware = (
  controller: IController
): RequestHandler => {
  return async (request, response, next) => {
    try {
      let httpRequest: HttpRequest;

      httpRequest = {
        ...request.body,
        ...request.params,
        ...request.query,
      };

      const httpResponse = await controller.handle(httpRequest);

      response.status(httpResponse.statusCode).json({
        status: httpResponse.statusCode,
        body: httpResponse.data,
      });
    } catch (error) {
      next(error);
    }
  };
};
