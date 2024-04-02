import { Profile } from "@/Domain/Entities";
import { ProfileId, Email } from "@/Domain/ValueObjects/Profile";

export interface IProfileRepository {
  create(profile: Profile): Promise<ProfileId>;
  findByEmail(email: Email): Promise<Profile | null>;
}
