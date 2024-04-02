import { Profile } from "@/Domain/Entities";
import {
  AddressComplement,
  AddressNumber,
  Cep,
  City,
  Cnpj,
  Cpf,
  Email,
  FullName,
  Neighborhood,
  Phone,
  ProfileId,
  Street,
  Type,
  Uf,
} from "@/Domain/ValueObjects/Profile";

import { IController } from "@/Presentation/Api/Protocols/IController";
import { HttpResponse } from "@/Presentation/Api/Helpers";
import { CreateProfileRequest } from "@/Presentation/@types/Api/Controllers/Profile";

export class PostCreateProfileController implements IController {
  async handle(request: any): Promise<HttpResponse> {
    const profile = this.makeProfileEntity(request); // Factory pattern

    return HttpResponse.created();
  }

  private makeProfileEntity(request: CreateProfileRequest): Profile {
    return new Profile(
      new ProfileId(9999), // Useless id
      new Type(request.type),
      new Cpf(request.cpf),
      request.cnpj ? new Cnpj(request.cnpj) : null,
      new FullName(request.name),
      new Phone(request.cellPhone),
      new Phone(request.phone),
      new Email(request.email),
      new Cep(request.cep),
      new Street(request.street),
      new AddressNumber(request.addressNumber),
      new AddressComplement(request.addressComplement),
      new Neighborhood(request.neighborhood),
      new City(request.city),
      new Uf(request.uf)
    );
  }
}
