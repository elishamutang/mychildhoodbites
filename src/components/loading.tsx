import { BlurFade } from "./magicui/blur-fade";
import { Skeleton } from "./ui/skeleton";

export default function Loading() {
  return (
    <BlurFade
      inView
      delay={0.25}
      className="font-inter col-span-2 row-span-1 grid gap-3 grid-rows-2 border border-zinc-300 rounded-lg"
    >
      {/* Image */}
      <div className="row-span-2">
        <Skeleton className="rounded-t-md border-b bg-gray-300 aspect-square" />
      </div>

      {/* Words */}
      <div className="p-2 flex flex-col truncate">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2 w-full">
            <Skeleton className="bg-gray-300 w-[200px] h-[35px]" />

            {/* Flag */}
            <Skeleton className="w-[45px] h-[35px] bg-gray-300" />
          </div>
          <Skeleton className="h-[50px] mb-2 bg-gray-300" />
        </div>

        <div className="flex justify-between">
          <Skeleton className="border rounded-md py-1 h-[30px] w-[40px] px-2 bg-gray-300" />
          <Skeleton className="border rounded-md py-1 h-[30px] w-[40px] px-2 bg-gray-300" />
        </div>
      </div>
    </BlurFade>
  );
}
