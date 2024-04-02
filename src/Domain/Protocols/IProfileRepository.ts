import { Profile } from "@/Domain/Entities";
import { ProfileId } from "@/Domain/ValueObjects/Profile/ProfileId";

export interface IProfileRepository {
  create(profile: Profile): Promise<ProfileId>;
}
