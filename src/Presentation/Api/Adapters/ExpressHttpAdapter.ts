import { Server } from "http";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import SwaggerUI from "swagger-ui-express";

import { IHttpServer } from "@/Infra/Protocols";

import { ExpressRouter } from "@/Presentation/Api/router";
import ErrorHandlerMiddleware from "@/Presentation/Api/Middlewares/ErrorHandlerMiddleware";
import swaggerFile from "@/Presentation/Api/swagger.json";

// Abstract the Http Server
export class ExpressHttpAdapter implements IHttpServer {
  private readonly app: Express = express();
  private router: express.Router;
  private serverConnection: Server | undefined;

  async startup(port: number): Promise<Server> {
    const { router } = new ExpressRouter();
    this.router = router;
    this.beforeStartup();
    this.serverConnection = this.app.listen(port, () => {
      console.log(`Http server listening on port: ${port}`);
    });
    return this.serverConnection;
  }

  private beforeStartup(): void {
    this.setupSecurity();
    this.setupRouter();
    this.setupDocs();
  }

  private setupRouter(): void {
    this.app.use(this.router);
    const errorHandler = new ErrorHandlerMiddleware();
    this.app.use(errorHandler.handler);
  }

  private setupDocs(): void {
    this.app.use("/api/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerFile));
  }

  private setupSecurity(): void {
    this.app.disable("x-powered-by");
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(hpp());
    this.app.use(express.json({ limit: "10kb" }));
  }
}
