"use client";

import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";
import { MouseEventHandler, useEffect, useRef } from "react";

export default function Nav() {
  const [opened, { toggle }] = useDisclosure();
  const navElem = useRef<HTMLElement>(null);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (navElem) {
      navElem.current?.classList.toggle("top-0");
      navElem.current?.classList.toggle("-top-500");
      toggle();
    }
  };

  return (
    <>
      <Burger
        className="mx-2 z-2 md:hidden"
        color="gray"
        opened={opened}
        onClick={toggle}
        aria-label="Toggle navigation"
      />

      <BlurFade delay={0.25 * 2} inView className="mx-2 hidden md:flex gap-5">
        <Link
          href="/products"
          className="text-lg font-inter font-bold border py-1 px-2 rounded-lg text-blue-600"
        >
          Bites
        </Link>
        <Link
          href="/categories"
          className="text-lg font-inter font-bold border py-1 px-2 rounded-lg text-green-600"
        >
          Categories
        </Link>
      </BlurFade>

      {/* Show overlay */}
      <nav
        ref={navElem}
        className={`${
          opened ? "top-0 backdrop-blur-xs" : "-top-500"
        } left-0 z-1 ease-in-out transition-all gap-3 duration-300 flex flex-col items-center justify-center bg-white text-black absolute w-full h-screen`}
      >
        <Link
          href="/products"
          className="text-2xl font-inter font-bold text-blue-600"
          onClick={handleClick}
        >
          Bites
        </Link>
        <Link
          href="/categories"
          className="text-2xl font-inter font-bold text-green-600"
          onClick={handleClick}
        >
          Categories
        </Link>
      </nav>
    </>
  );
}
