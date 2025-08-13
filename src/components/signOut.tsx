"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SignOut({
  className,
  spanClassName,
  removeOverlay,
}: {
  className?: string;
  spanClassName?: string;
  removeOverlay?: Function | undefined;
}) {
  const router = useRouter();

  return (
    <button
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              if (removeOverlay) {
                removeOverlay();
              }
              router.push("/");
            },
          },
        })
      }
      type="button"
      className={cn(
        "border px-2 py-1 rounded-sm bg-red-600 text-white cursor-pointer",
        className
      )}
    >
      <span className={cn("font-bold", spanClassName)}>Sign Out</span>
    </button>
  );
}
