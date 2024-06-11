import { UserResource } from "@clerk/types";

export type AuthUser = Pick<
  UserResource,
  "id" | "fullName" | "firstName" | "lastName" | "imageUrl" | "username"
> & {
  email: string;
};
