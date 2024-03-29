type ProfileEntity = {
  id: number;
  type: string;
  cpf: string;
  cnpj?: string;
  name: string;
  cellPhone: string;
  phone: string;
  email: string;
  cep: string;
  street: string;
  addressNumber: string;
  addressComplement: string;
  neighborhood: string;
  city: string;
  uf: string;
};

export type CreateProfileRequest = Omit<ProfileEntity, "id">;
export type CreateProfileResponse = ProfileEntity;
