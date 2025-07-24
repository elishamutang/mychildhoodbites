import Heading from "@/components/heading";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Globe } from "@/components/magicui/globe";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-start text-3xl p-5 border rounded-lg w-full text-center">
      <Heading delay={0.25 * 3}>Around the World in Childhood Bites.</Heading>

      <BlurFade delay={0.25 * 3} inView className="md:max-w-[50%] mt-5">
        <h2 className="md:text-[22px] sm:text-xl xl:text-xl lg:text-[16px] text-start md:text-center text-sm text-zinc-400 font-inter">
          Journey back in time and across continents. Explore, share, and savor
          beloved childhood foods from every culture.
        </h2>
      </BlurFade>

      <section className="relative max-w-3xl size-full">
        <BlurFade className="mt-10 rounded-lg" inView delay={0.25 * 3.5}>
          <Globe className="lg:-top-32 -top-22 left-3 lg:left-15 w-xs xl:w-lg 2xl:w-2xl lg:w-lg md:w-lg md:-top-35 sm:w-lg sm:left-15" />
        </BlurFade>
      </section>
    </section>
  );
}
