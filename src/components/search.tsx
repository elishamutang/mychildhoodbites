"use client";

import { BlurFade } from "./magicui/blur-fade";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "@mantine/hooks";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // useDebouncedCallback to prevent querying DB on each keystroke.
  const handleSearch = useDebouncedCallback((name: string): void => {
    const params = new URLSearchParams(searchParams);

    name ? params.set("name", name) : params.delete("name");
    router.replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <BlurFade inView delay={0.25 * 2} className="w-full md:w-xs lg:w-md">
      <section className="my-10">
        <input
          defaultValue={searchParams.get("name")?.toString()}
          name="product"
          type="text"
          className="w-full px-1 py-1 focus:outline-hidden border-b-2 border-b border-b-zinc-300 focus:border-red-600"
          placeholder="Search food name here..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </section>
    </BlurFade>
  );
}
