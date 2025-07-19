"use client";

import { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Burger } from "@mantine/core";

export default function Header() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [opened, { toggle }] = useDisclosure();

  useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.outerWidth, height: window.outerHeight });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="flex items-center justify-between border border-green-500 w-full p-2">
        <h1 className="text-2xl">mychildhoodgrocer.</h1>

        {dimensions.width > 600 ? (
          <nav className="mx-2 flex gap-5">
            <h1>Products</h1>
            <h1>Categories</h1>
          </nav>
        ) : (
          <Burger
            className="mx-2 z-99"
            color={opened ? "white" : "black"}
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />
        )}
      </header>

      {/* Show overlay */}
      <nav
        className={`${
          opened ? "top-0" : "-top-100"
        } ease-in-out transition-all gap-3 duration-300 flex flex-col items-center justify-center bg-slate-500 text-white absolute w-full h-full`}
      >
        <h1 className="text-2xl">Products</h1>
        <h1 className="text-2xl">Categories</h1>
      </nav>
    </>
  );
}
