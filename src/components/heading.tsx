import { ReactNode } from "react";
import { BlurFade } from "./magicui/blur-fade";
import { cn } from "@/lib/utils";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  delay: number;
}

export default function Heading({
  children,
  delay,
  className,
  ...props
}: HeadingProps) {
  return (
    <BlurFade
      delay={delay}
      inView
      className={cn(
        `md:text-6xl lg:text-[65px] xl:text-7xl 2xl:text-8xl sm:text-6xl text-start md:text-center text-[38px] h-content md:max-w-[80%] font-inter font-extrabold`,
        className
      )}
      {...props}
    >
      {children}
    </BlurFade>
  );
}
