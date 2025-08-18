import { BlurFade } from "./magicui/blur-fade";
import Link from "next/link";
import Image from "next/image";
import AisKrim from "../../public/images/products/ais-krim.png";
import { Category, Product, Country } from "../../generated/prisma";
import getProductImg from "@/lib/getProductImg";

interface CompleteProduct extends Product {
  countries: Country[];
  category: Category[];
}

export default async function Card({ product }: { product: CompleteProduct }) {
  const imgSrc = await getProductImg(product.name);

  const uniqueSubregions = Array.from(
    new Set(product.countries.map((country) => country.subregion))
  );

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
            <h1 className="font-extrabold truncate border bg-black text-white px-1 rounded-sm">
              {product.name}
              <span className="text-red-600">.</span>
            </h1>

            {/* Sub Region */}
            {uniqueSubregions.map((subregion, idx) => (
              <p key={idx}>{subregion}</p>
            ))}
          </div>
          <p className="text-zinc-500 h-[50px] mb-2 text-wrap overflow-hidden line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex justify-between">
          {/* TODO: Update with link to category */}
          <section className="flex gap-2">
            <div className="text-xs border rounded-md p-1 font-semibold transition duration-150">
              {product.category[0].name}
            </div>

            {product.category.length > 1 && (
              <div className="text-xs border rounded-md p-1 px-2 font-semibold transition duration-150">
                +{product.category.length - 1}
              </div>
            )}
          </section>

          <Link
            scroll={false}
            href={`/products/${product.id}`}
            className="text-xs border rounded-md py-1 px-2 hover:text-white font-semibold hover:bg-black transition duration-150"
          >
            View
          </Link>
        </div>
      </div>
    </BlurFade>
  );
}
