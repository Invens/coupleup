import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Ensures session is handled with JWT
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Use NEXTAUTH_SECRET
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  debug: false, // Helpful for debugging in production
};

// Handle GET and POST requests for authentication
const handler = NextAuth(authOptions);

// Export named methods for Next.js routing
export { handler as GET, handler as POST };
