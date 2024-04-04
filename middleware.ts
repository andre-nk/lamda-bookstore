import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({});

export const config = {
  publicRoutes: ["/"],
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
