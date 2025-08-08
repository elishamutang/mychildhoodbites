"use client";

import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";
import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";
import { MouseEventHandler, useRef } from "react";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Avatar from "./avatar";
import SignOut from "./signOut";

export default function Nav() {
  const [opened, { toggle }] = useDisclosure();
  const navElem = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Get user session
  const { useSession } = authClient;
  const { data: userSession, isPending, error, refetch } = useSession();

  const handleClick: MouseEventHandler<
    HTMLAnchorElement | HTMLButtonElement
  > = () => {
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
        {/* Navigation */}
        <Link
          href="/products"
          className="hover:text-white hover:bg-blue-600 transition duration-300 text-lg font-inter font-bold border py-1 px-2 rounded-lg text-blue-600"
        >
          Bites
        </Link>
        <Link
          href="/categories"
          className="hover:text-white hover:bg-green-600 transition duration-300 text-lg font-inter font-bold border py-1 px-2 rounded-lg text-green-600"
        >
          Categories
        </Link>

        {/* Sign-in */}
        {pathname !== "/signin" && pathname !== "/signup" && !userSession && (
          <Link
            href="/signin"
            className="bg-green-600 transition duration-300 text-lg font-inter font-bold border py-1 px-2 rounded-lg text-white"
          >
            Sign In
          </Link>
        )}

        {/* Avatar */}
        {userSession && <Avatar />}

        {/* Sign-out */}
        {userSession && <SignOut />}
      </BlurFade>

      {/* Show overlay */}
      <nav
        ref={navElem}
        className={`${
          opened ? "top-0 backdrop-blur-xs" : "-top-500"
        } left-0 z-1 ease-in-out transition-all gap-4 duration-300 flex flex-col items-center justify-center bg-white text-black absolute w-full h-screen`}
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

        {/* Dashboard */}
        {userSession && (
          <Link
            href="/dashboard"
            className="text-2xl font-inter font-bold text-blue-600"
            onClick={handleClick}
          >
            Dashboard
          </Link>
        )}

        {/* Sign-out */}
        {userSession && (
          <button
            type="button"
            className=" text-zinc-400"
            onClick={handleClick}
          >
            <span className="text-2xl font-inter font-bold">Sign Out</span>
          </button>
        )}
      </nav>
    </>
  );
}
