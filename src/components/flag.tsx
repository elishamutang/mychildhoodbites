"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";

type FlagProps = {
  flag: string;
  countryName: string;
};

export default function Flag({ flag, countryName }: FlagProps) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Image
          loading="lazy"
          src={flag}
          width={35}
          height={35}
          alt="Country flag"
          className="drop-shadow-xl/20"
        />
      </TooltipTrigger>
      <TooltipContent>{countryName}</TooltipContent>
    </Tooltip>
  );
}
