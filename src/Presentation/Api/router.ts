import { RequestHandler, Router } from "express";

import { ProfileRoutes } from "@/Presentation/Api/Routes/Profile.routes";

export class ExpressRouter {
  readonly router: Router;

  constructor() {
    this.router = Router();

    ProfileRoutes.register(this.router);
  }
}
