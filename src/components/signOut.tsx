"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignOut() {
  const router = useRouter();

  return (
    <button
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
          },
        })
      }
      type="button"
      className="border px-2 py-1 rounded-sm bg-blue-600 text-white cursor-pointer"
    >
      <span className="font-bold">Sign Out</span>
    </button>
  );
}
