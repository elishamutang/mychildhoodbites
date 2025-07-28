import { BlurFade } from "./magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import AisKrim from "../../public/images/products/high-res-ais-krim.png";
import { Country, Category } from "../../generated/prisma";
import Flag from "./flag";
import getProductImg from "@/lib/getProductImg";

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

export default async function Card({ product }: { product: Product }) {
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
          className="border-b  rounded-t-md w-full h-full aspect-square"
        />
      </div>

      {/* Words */}
      <div className="p-2 flex flex-col truncate">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between gap-2 w-full">
            <h1 className="font-semibold truncate">{product.name}</h1>

            {/* Flag */}
            <Flag
              flag={product.Country.flag}
              countryName={product.Country.name}
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
