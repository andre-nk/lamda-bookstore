"use server";

import db from "@/utils/db";
import { currentUser } from "@clerk/nextjs/server";

export const updateProfile = async (
  fullname: string,
  address: string,
  phoneNumber: string,
) => {
  const user = await currentUser();
  if (!user) {
    return {
      error: "User not found",
    };
  }

  await db.user.update({
    where: {
      externalUserId: user.id,
    },
    data: {
      address,
      phoneNumber,
      fullname,
    },
  });

  return {
    success: true,
  };
};
