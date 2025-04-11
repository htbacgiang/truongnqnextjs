import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import bcrypt from "bcrypt";
import User from "../../../models/User";
import clientPromise from "./lib/mongodb";
import db from "../../../utils/db";

// Kết nối database với logging
db.connectDb().catch((error) => {
  console.error("MongoDB connection error:", error);
});

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Email and password are required.");
          }
          await db.connectDb();
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            throw new Error("This email does not exist.");
          }
          if (!user.password) {
            throw new Error("Please enter your password");
          }
          const isMatch = await bcrypt.compare(credentials.password, user.password);
          if (!isMatch) {
            throw new Error("Email hoặc mật khẩu không đúng");
          }
          console.log("User authorized:", user.email, "ID:", user._id.toString()); // Debug
          return { id: user._id.toString(), email: user.email, name: user.name, role: user.role };
        } catch (error) {
          console.error("Authorization error:", error.message);
          throw new Error(error.message || "Internal server error.");
        } finally {
          await db.disconnectDb();
        }
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role || "user";
      }
      console.log("JWT callback:", { token }); // Debug
      return token;
    },
    async session({ session, token }) {
      try {
        console.log("Session callback - Token:", token); // Debug
        if (!token.id) {
          console.error("No user ID in token");
          return session;
        }
        await db.connectDb();
        const user = await User.findById(token.id);
        if (!user) {
          console.error("User not found for ID:", token.id);
          return session; // Trả về session mặc định thay vì throw error
        }
        session.user.id = token.id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.role = user.role || "user";
        session.user.emailVerified = user.emailVerified || false;
        session.user.image = user.image;
        session.user.gender = user.gender;
        session.user.dateOfBirth = user.dateOfBirth;
        session.user.phone = user.phone;
        console.log("Session created for:", session.user.email, "ID:", session.user.id); // Debug
        return session;
      } catch (error) {
        console.error("Session callback error:", error.message);
        return session; // Trả về session mặc định để tránh crash
      } finally {
        await db.disconnectDb();
      }
    },
  },
  pages: {
    signIn: "/dang-nhap",
    error: "/loi-dang-nhap",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
  debug: process.env.NODE_ENV === "development", // Bật debug ở local
});