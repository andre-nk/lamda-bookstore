import { currentUser } from "@clerk/nextjs";
import ProfileForm from "./_components/form";
import db from "@/utils/db";

export default async function ProfilePage() {
  const clerkUser = await currentUser();
  if (!clerkUser) {
    throw new Error("User not found");
  }

  const dbUser = await db.user.findUnique({
    where: {
      externalUserId: clerkUser.id,
    },
  });
  if (!dbUser) {
    throw new Error("User not found");
  }

  return <ProfileForm user={dbUser} />;
}
