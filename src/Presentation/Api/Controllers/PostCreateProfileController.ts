import { Route, Post, Body, SuccessResponse, Response } from "tsoa";

import { Profile } from "@/Domain/Entities";
import { CreateProfileUsecase } from "@/Domain/Usecases/CreateProfileUsecase";
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

import { ProfileRepository } from "@/Infra/Repositories/ProfileRepository";

import { IController } from "@/Presentation/Api/Protocols/IController";
import { HttpResponse } from "@/Presentation/Api/Helpers";
import { CreateProfileRequest } from "@/Presentation/@types/Api/Controllers/Profile";

@Route("api/profile") // Use of TSOA decorators to generate the Swagger documentation
export class PostCreateProfileController implements IController {
  @SuccessResponse("201", "Created")
  @Post()
  @Response<{ statusCode: number; body: string }>("400", "Bad Request", {
    statusCode: 400,
    body: "Invalid data",
  })
  @Response<{ statusCode: number; body: string }>("409", "Conflict", {
    statusCode: 409,
    body: "Profile already exists",
  })
  async handle(@Body() request: CreateProfileRequest): Promise<HttpResponse> {
    const profile = this.makeProfileEntity(request);
    const profileRepository = new ProfileRepository();
    const createProfileUsecase = new CreateProfileUsecase(profileRepository);
    const created = await createProfileUsecase.execute(profile);
    return HttpResponse.created(created.toJson());
  }

  /**
   * Factory pattern to validate the request data and build the entity.
   * Invalid data are caught here via their value objects, then intercepted by the error middleware.
   */
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
