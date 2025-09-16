import { Clerk } from "@clerk/clerk-sdk-node";
import dotenv from "dotenv";

dotenv.config();

const clerkClient = Clerk({
  secretKey: process.env.CLERK_SECRET_KEY,
});

export async function assignOrgAdminRole(email) {
  try {
    const users = await clerkClient.users.getUserList({
      emailAddress: [email],
    });
    if (users.length > 0) {
      const userId = users[0].id;

      await clerkClient.users.updateUser(userId, {
        publicMetadata: {
          role: "admin",
        },
      });

      console.log("✅ User role updated to admin!");
    } else {
      console.log("❌ User not found.");
    }
  } catch (error) {
    console.error("❌ Error assigning role:", error);
  }
}
