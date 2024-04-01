import { Server } from "http";

export interface IHttpServer {
  startup: (port: number) => Promise<Server>;
}
