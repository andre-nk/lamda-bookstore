import { AuthUser } from "@/models/auth-user";
import { useUser as useUserClerk } from "@clerk/nextjs";

export const useUser = (): AuthUser | null => {
  const { user } = useUserClerk();

  if (!user) return null;

  if (!user.primaryEmailAddress)
    throw new Error("Primary email address is required.");

  // Serialize user object, so that it can be passed into
  // the server actions.
  return {
    id: user.id,
    fullName: user.fullName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.primaryEmailAddress.emailAddress,
    imageUrl: user.imageUrl,
    username: user.username,
  };
};
