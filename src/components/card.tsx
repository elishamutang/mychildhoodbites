import { BlurFade } from "./magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import AisKrim from "../../public/images/products/ais-krim.png";
import { Category, Product, SubRegion } from "../../generated/prisma";
import getProductImg from "@/lib/getProductImg";

interface CompleteProduct extends Product {
  SubRegion: SubRegion;
  Category: Category;
}

export default async function Card({ product }: { product: CompleteProduct }) {
  const imgSrc = await getProductImg(product.name);

  return (
    <BlurFade
      inView
      delay={0.25}
      className="font-inter col-span-2 row-span-1 grid gap-3 grid-rows-2 border border-zinc-300 rounded-lg"
    >
      {/* Image */}
      <div className="row-span-2">
        <Image
          src={imgSrc ?? AisKrim}
          width={600}
          height={600}
          alt="Snack"
          loading="lazy"
          className="border-b rounded-t-md w-full h-full aspect-square"
        />
      </div>

      {/* Words */}
      <div className="p-2 flex flex-col truncate">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2 w-full">
            <h1 className="font-extrabold truncate">{product.name}</h1>

            {/* Sub Region */}
            <p>{product.SubRegion.name}</p>
          </div>
          <p className="text-zinc-500 h-[50px] mb-2 text-wrap overflow-hidden line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex justify-between">
          <div className="text-xs border rounded-md p-1 font-semibold hover:text-white hover:bg-blue-600 transition duration-150">
            {product.Category.name}
          </div>
          <Link
            scroll={false}
            href={`/products/${product.id}`}
            className="text-xs border rounded-md py-1 px-2 hover:text-white font-semibold hover:bg-green-700 transition duration-150"
          >
            View
          </Link>
        </div>
      </div>
    </BlurFade>
  );
}
