import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/auth/error",
  },
});

export const config = {
  matcher: ["/users"], // Protect specific routes
};
