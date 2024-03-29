import { Server } from "http";
import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";

import { ExpressRouter } from "@/Presentation/Api/router";

import { HttpServer } from "@/Infra/Protocols";
import ErrorHandlerMiddleware from "../Middlewares/ErrorHandlerMiddleware";

export class ExpressHttpAdapter implements HttpServer {
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
  }

  private setupRouter(): void {
    this.app.use(this.router);

    const errorHandler = new ErrorHandlerMiddleware();
    this.app.use(errorHandler.handler);
  }

  private setupSecurity(): void {
    this.app.disable("x-powered-by");
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(hpp());
    this.app.use(
      express.json({
        limit: "10kb",
      })
    );
  }
}
