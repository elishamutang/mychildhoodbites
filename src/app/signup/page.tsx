import Heading from "@/components/heading";

export default function Page() {
  return (
    <section className="flex font-inter flex-col items-center md:border rounded-lg">
      <Heading delay={0.25} className="text-6xl">
        <span className="text-blue-600">Sign</span>{" "}
        <span className="text-green-600">Up.</span>
      </Heading>

      <form className="w-full md:w-md md:mb-10 border rounded-md p-4 flex flex-col gap-4">
        <section className="flex flex-col">
          <label htmlFor="name" className="font-bold text-blue-600">
            Name
          </label>
          <input
            className="border p-2 text-blue-600 focus:outline-green-500"
            type="name"
            name="name"
            id="name"
            placeholder="Jorn Dorh"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="email" className="font-bold text-blue-600">
            Email
          </label>
          <input
            className="border p-2 text-blue-600 focus:outline-green-500"
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="password" className="font-bold text-blue-600">
            Password
          </label>
          <input
            className="border p-2 text-blue-600 focus:outline-green-500"
            type="password"
            name="password"
            id="password"
            placeholder="my_very_secure_password"
          />
        </section>
      </form>
    </section>
  );
}
