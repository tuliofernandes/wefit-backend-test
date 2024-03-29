import { IController } from "@/Presentation/Api/Protocols/IController";
import { HttpResponse } from "@/Presentation/Api/Helpers";

export class PostCreateProfileController implements IController {
  async handle(request: any): Promise<HttpResponse> {
    return HttpResponse.ok({});
  }
}
