import Heading from "@/components/heading";
import { BlurFade } from "@/components/magicui/blur-fade";
import LandingPagePicture from "../../public/images/landing-page-image-large.png";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col justify-start text-3xl w-full text-center">
      <section className="relative h-full -z-10 bg-black">
        <Image
          src={LandingPagePicture}
          loading="lazy"
          alt="Asian guy sitting at table"
          className="w-full h-screen object-cover opacity-12 bg-black"
          quality={100}
        />
        <div className="absolute flex flex-col items-center top-60 left-0 lg:w-[80%] lg:left-20 xl:left-40 xl:top-70 2xl:left-35">
          <Heading
            delay={0.25 * 3}
            className="text-center text-5xl px-2 text-white w-full"
          >
            Gather at the asian table
          </Heading>

          <BlurFade delay={0.25 * 3} inView className="">
            <h2 className="md:text-[22px] text-center sm:text-xl xl:text-xl lg:text-[16px] text-sm text-zinc-400 font-inter">
              where every dish tells a story.
            </h2>
          </BlurFade>
        </div>
      </section>
    </section>
  );
}
