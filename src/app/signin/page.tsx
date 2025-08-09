import Heading from "@/components/heading";
import SignIn from "@/components/signInForm";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/dashboard");
  }

  return (
    <section className="flex font-inter flex-col items-center md:border rounded-lg">
      <Heading delay={0.25} className="text-6xl">
        <span className="text-blue-600">Sign</span>{" "}
        <span className="text-green-600">In.</span>
      </Heading>

      {/* Sign In Form */}
      <SignIn />
    </section>
  );
}
