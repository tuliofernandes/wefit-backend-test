import { IController } from "@/Presentation/Api/Protocols/IController";
import { HttpResponse } from "@/Presentation/Api/Helpers";
import { ProfileType } from "@/Domain/Enums/ProfileType";

import { Type } from "@/Domain/ValueObjects/Profile/Type";

export class PostCreateProfileController implements IController {
  async handle(request: any): Promise<HttpResponse> {
    const profileType = new Type(request.type);

    return HttpResponse.ok({});
  }
}
