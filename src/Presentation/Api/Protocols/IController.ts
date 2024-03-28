import { HttpResponse } from "@/Presentation/Api/Helpers";

export interface IController {
  handle: (request: any) => Promise<HttpResponse>;
}
