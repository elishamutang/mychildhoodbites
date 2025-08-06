"use client";
import { authClient } from "@/lib/auth-client";

export default function GoogleSignIn() {
  async function googleSignIn() {
    await authClient.signIn.social({
      provider: "google",
    });
  }

  return (
    <button
      onClick={googleSignIn}
      type="button"
      className="border px-2 py-1 rounded-sm bg-blue-600 text-white cursor-pointer"
    >
      Google Sign In
    </button>
  );
}
