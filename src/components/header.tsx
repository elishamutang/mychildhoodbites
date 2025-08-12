import Link from "next/link";
import { BlurFade } from "./magicui/blur-fade";
import Nav from "./navbar";

export default async function Header() {
  return (
    <header className="flex border-zinc-300 items-center justify-between border rounded-lg w-full p-2">
      <Link href="/" className="text-2xl font-extrabold font-inter">
        <BlurFade delay={0.25} inView>
          <span className="text-red-600">The </span>
          <span className="text-red-600">Asian </span>
          <span className="text-red-600">Table</span>.
        </BlurFade>
      </Link>
      <Nav />
    </header>
  );
}
