"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import type { ImageProps } from "next/image";

interface FlagImageProps extends ImageProps {
  tooltipWidth?: string;
  countryName: string;
}

export default function Flag({
  tooltipWidth,
  countryName,
  ...props
}: FlagImageProps) {
  return (
    <Tooltip>
      <TooltipTrigger className={tooltipWidth}>
        <Image loading="lazy" {...props} />
      </TooltipTrigger>
      <TooltipContent>{countryName}</TooltipContent>
    </Tooltip>
  );
}
