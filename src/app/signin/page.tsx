import Heading from "@/components/heading";
import GoogleSignIn from "@/components/googleSignIn";

export default function Page() {
  return (
    <section className="flex font-inter flex-col items-center md:border rounded-lg">
      <Heading delay={0.25} className="text-6xl">
        <span className="text-blue-600">Sign</span>{" "}
        <span className="text-green-600">In.</span>
      </Heading>

      <form className="w-full md:w-md md:mb-10 border rounded-md p-4 flex flex-col gap-4">
        <section className="flex flex-col">
          <label htmlFor="email" className="font-bold text-blue-600">
            Email
          </label>
          <input
            className="border p-2 text-blue-600"
            type="email"
            name="email"
            id="email"
            placeholder="email@example.com"
            required
          />
        </section>

        <section className="flex flex-col">
          <label htmlFor="password" className="font-bold text-blue-600">
            Password
          </label>
          <input
            className="border p-2 text-blue-600"
            type="password"
            name="password"
            id="password"
            placeholder="my_very_secure_password"
            required
          />
        </section>

        <button
          type="submit"
          className="border cursor-pointer transition duration-150 py-1 border-green-600 hover:bg-green-600 hover:text-white focus:bg-green-600 text-green-600 focus:text-white rounded-sm font-bold"
          style={{ fontWeight: "bold" }}
        >
          Submit
        </button>

        {/* Alternative providers */}
        <section>
          <GoogleSignIn />
        </section>
      </form>
    </section>
  );
}
