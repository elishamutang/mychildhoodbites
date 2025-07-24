import { BlurFade } from "./magicui/blur-fade";

export default function Footer() {
  return (
    <footer className="border border-zinc-300 font-inter font-semibold rounded-lg w-full text-center">
      <BlurFade inView delay={0.25} className="border border-transparent">
        Designed and developed by{" "}
        <a
          href="https://elishamutang.xyz"
          target="_blank"
          className="font-inter font-bold text-stone-400 hover:text-green-600 transition delay-150"
        >
          elishamutang
        </a>
      </BlurFade>
    </footer>
  );
}
