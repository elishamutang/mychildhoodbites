import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";
import Flag from "@/components/flag";
import { redirect } from "next/navigation";

export default async function Page() {
  // Get user session
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect("/signin");
  }

  // Get user information
  const userCountry = await prisma.country.findUnique({
    where: {
      id: session?.user.countryId,
    },
  });

  console.log(userCountry);

  return (
    <section className="font-inter border">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
        Dashboard
      </h1>

      {/* Brief information */}
      <section className="border">
        <h2>
          Welcome User{" "}
          <span className="font-bold italic">{session?.user.name}</span>
        </h2>
        <div className="flex gap-2">
          <p>{userCountry?.name}</p>
          {userCountry && (
            <Flag
              className="border border-black"
              width={30}
              height={30}
              src={userCountry?.flag}
              countryName={userCountry.name}
              alt={userCountry.name}
            />
          )}
        </div>
        <p>Joined on {session.user.createdAt.toLocaleDateString()}</p>
      </section>

      {/* Bites */}

      <section>
        <h1 className="border text-2xl md:text-3xl font-semibold text-green-600">
          I have tried...
        </h1>
      </section>
      <section>
        <h1 className="text-2xl md:text-3xl font-semibold text-green-600">
          I want to try...
        </h1>
      </section>
    </section>
  );
}
