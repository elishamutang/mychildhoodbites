"use client";

import { authClient } from "@/lib/auth-client";

export default function SignOut() {
  return (
    <button
      onClick={async () => await authClient.signOut()}
      type="button"
      className="border px-2 py-1 rounded-sm bg-blue-600 text-white cursor-pointer"
    >
      Sign Out
    </button>
  );
}
