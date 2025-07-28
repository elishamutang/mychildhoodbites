import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";
import Nav from "./navbar";

export default function Header() {
  return (
    <header className="flex border-zinc-300 items-center justify-between border rounded-lg w-full p-2">
      <Link href="/" className="text-2xl font-extrabold font-inter">
        <BlurFade delay={0.25} inView>
          <span className="text-blue-600">mychildhood</span>
          <span className="text-green-600">bites.</span>
        </BlurFade>
      </Link>
      <Nav />
    </header>
  );
}
