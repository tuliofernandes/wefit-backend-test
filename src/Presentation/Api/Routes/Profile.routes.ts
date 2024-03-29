import { Router } from "express";

import { HandleRequestMiddleware } from "@/Presentation/Api/Middlewares/HandleRequestMiddleware";
import { PostCreateProfileController } from "@/Presentation/Api/Controllers/PostCreateProfileController";

export class ProfileRoutes {
  static register(router: Router): void {
    router.post(
      "/api/profile",
      HandleRequestMiddleware(new PostCreateProfileController())
    );
  }
}
