"use client";

import { BlurFade } from "./magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import AisKrim from "../../public/images/products/high-res-ais-krim.png";
import { Country, Category } from "../../generated/prisma";

type Product = {
  id: number;
  name: string;
  description?: string | null;
  image?: string | null;
  whereToBuy?: string | null;
  countryId: number;
  Country: Country;
  categoryId: number;
  Category: Category;
  createdAt: Date;
  updatedAt: Date;
};

export default function Card({ product }: { product: Product }) {
  return (
    <BlurFade
      inView
      delay={0.25}
      className="font-inter col-span-2 row-span-1 grid gap-3 grid-rows-2 border border-zinc-300 rounded-lg"
    >
      {/* Image */}
      <div className="row-span-2">
        <Image
          src={AisKrim}
          alt="Snack"
          loading="lazy"
          className="border-b border-zinc-500 rounded-t-md w-full h-full aspect-square"
        />
      </div>

      {/* Words */}
      <div className="p-2 flex flex-col truncate">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2 w-full">
            <h1 className="font-semibold truncate">{product.name}</h1>
            <Image
              loading="lazy"
              src={product.Country.flag}
              width={35}
              height={35}
              alt="Country flag"
              className="drop-shadow-xl/20"
            />
          </div>
          <p className="text-zinc-400 h-[60px] truncate">
            {product.description}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="text-xs border rounded-md p-1">
            {product.Category.name}
          </div>
          <Link
            href={`/products/${product.id}`}
            className="text-xs border rounded-md py-1 px-2"
          >
            View
          </Link>
        </div>
      </div>
    </BlurFade>
  );
}
