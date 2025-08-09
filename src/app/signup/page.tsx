import SignUp from "@/components/signUpForm";
import Heading from "@/components/heading";
import { prisma } from "@/lib/prisma";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  // Get countries
  const countries = await prisma.country.findMany();

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
        <span className="text-green-600">Up.</span>
      </Heading>

      {/* Sign Up Form */}
      <SignUp countries={countries} />
    </section>
  );
}
