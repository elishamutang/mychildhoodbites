"use client";

import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";

export default function Nav() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <>
      <Burger
        className="mx-2 z-2 md:hidden"
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />

      <BlurFade delay={0.25 * 2} inView className="mx-2 hidden md:flex gap-5">
        <Link
          href="/products"
          className="text-lg font-inter border py-1 px-2 rounded-lg"
        >
          Products
        </Link>
        <Link
          href="/categories"
          className="text-lg font-inter border py-1 px-2 rounded-lg"
        >
          Categories
        </Link>
      </BlurFade>

      {/* Show overlay */}
      <nav
        className={`${
          opened ? "top-0 backdrop-blur-xs" : "-top-500"
        } left-0 z-1 ease-in-out transition-all gap-3 duration-300 flex flex-col items-center justify-center bg-white text-black absolute w-full h-screen`}
      >
        <h1 className="text-2xl font-inter font-bold">Products</h1>
        <h1 className="text-2xl font-inter font-bold">Categories</h1>
      </nav>
    </>
  );
}
