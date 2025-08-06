"use client";

import GoogleSignIn from "./googleSignIn";
import { useActionState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { signUp } from "@/actions/actions";
import { Country } from "../../generated/prisma";

export default function SignUp({
  className,
  countries,
}: {
  className?: string;
  countries: Country[];
}) {
  const [state, action, isPending] = useActionState(signUp, null);

  console.log(state);

  return (
    <form
      action={action}
      className={cn(
        "w-full md:w-md md:mb-10 border rounded-md p-4 flex flex-col gap-4",
        className
      )}
    >
      <section className="flex flex-col">
        <label htmlFor="name" className="font-bold text-blue-600">
          Name
        </label>
        <input
          defaultValue={state?.inputs?.name}
          className={`border p-2 text-blue-600 ${
            state?.errors?.fieldErrors.name ? "border-red-500" : ""
          }`}
          type="text"
          name="name"
          id="name"
          placeholder="Jorn Dorh"
          required
        />
        {state?.errors?.fieldErrors.name &&
          state.errors.fieldErrors.name.map((err: string, idx: number) => (
            <div className="text-xs text-red-500" key={idx}>
              {err}
            </div>
          ))}
      </section>

      <section className="flex flex-col">
        <label htmlFor="email" className="font-bold text-blue-600">
          Email
        </label>
        <input
          defaultValue={state?.inputs?.email}
          className={`border p-2 text-blue-600 ${
            state?.errors?.fieldErrors.email ? "border-red-500" : ""
          }`}
          type="email"
          name="email"
          id="email"
          placeholder="email@example.com"
          required
        />
        {state?.errors?.fieldErrors.email &&
          state.errors.fieldErrors.email.map((err: string, idx: number) => (
            <div className="text-xs text-red-500" key={idx}>
              {err}
            </div>
          ))}
      </section>

      <section className="flex flex-col">
        <label htmlFor="password" className="font-bold text-blue-600">
          Password
        </label>
        <input
          className={`border p-2 text-blue-600 ${
            state?.errors?.fieldErrors.password ? "border-red-500" : ""
          }`}
          type="password"
          name="password"
          id="password"
          placeholder="my_very_secure_password"
          required
        />
        {state?.errors?.fieldErrors.password &&
          state.errors.fieldErrors.password.map((err: string, idx: number) => (
            <div className="text-xs text-red-500" key={idx}>
              {err}
            </div>
          ))}
      </section>

      <section className="flex flex-col">
        <label htmlFor="country" className="font-bold text-blue-600">
          Country
        </label>
        <select
          name="country"
          id="country"
          className="border p-2 text-blue-600"
        >
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>
      </section>

      <button
        disabled={isPending}
        type="submit"
        className="disabled:bg-zinc-200 disabled:opacity-50 disabled:border-zinc-400 disabled:text-black disabled:cursor-not-allowed border cursor-pointer transition duration-150 py-1 border-green-600 hover:bg-green-600 hover:text-white focus:bg-green-600 text-green-600 focus:text-white rounded-sm font-bold"
        style={{ fontWeight: "bold" }}
      >
        Register
      </button>

      {/* Display sign-up or sign-in button */}
      <section className="border flex gap-5 justify-center items-center">
        <p>Have an account?</p>
        <Link href="/signin" className="px-2 py-1 border w-max">
          Sign In
        </Link>
      </section>

      {/* Alternative providers */}
      <section>
        <GoogleSignIn />
      </section>
    </form>
  );
}
