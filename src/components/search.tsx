"use client";

import { getProduct } from "@/actions/actions";
import { BlurFade } from "./magicui/blur-fade";
import { useActionState } from "react";

export default function Search() {
  const [state, action, pending] = useActionState(getProduct, "");

  return (
    <BlurFade inView delay={0.25 * 2} className="w-full md:w-max">
      <form
        action={action}
        className="font-inter my-5 border flex p-2 gap-2 border-zinc-300 rounded-sm"
      >
        <label htmlFor="product"></label>
        <input
          name="product"
          type="text"
          className="px-1 py-1 focus:outline-hidden border-b-2 border-b border-b-zinc-300 focus:border-blue-600"
          placeholder="Food goes here..."
        />
        <button
          disabled={pending}
          type="submit"
          style={{ fontWeight: "bold" }}
          className="border disabled:opacity-50 disabled:cursor-not-allowed bg-blue-600 text-white px-2 rounded-sm hover:cursor-pointer hover:bg-green-600 hover:font-bold transition duration-200"
        >
          Search
        </button>
      </form>
    </BlurFade>
  );
}
