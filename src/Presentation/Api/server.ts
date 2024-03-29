import { EnvAdapter } from "@/Infra/Configs/env";
import { ExpressHttpAdapter } from "@/Presentation/Api/Adapters/ExpressHttpAdapter";

import { Server as HttpServer } from "http";
import gracefulShutdown from "http-graceful-shutdown";

export class Server {
  private httpServer: HttpServer | undefined;

  constructor(private readonly api = new ExpressHttpAdapter()) {}

  async startup(): Promise<void> {
    this.httpServer = await this.api.startup(EnvAdapter.http.listenPort);
    gracefulShutdown(this.httpServer);
  }

  async shutdown(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.httpServer?.close(() => {
        resolve();
      });
    });
  }
}
