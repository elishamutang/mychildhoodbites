import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import getProductImg from "@/lib/getProductImg";
import Flag from "@/components/flag";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Get product.
  const id = parseInt((await params).id);
  const product = await prisma.product.findUnique({
    where: { id: id },
    include: {
      Country: true,
      Category: true,
    },
  });

  if (!product) {
    notFound();
  }

  // Locate and load corresponding product image.
  const imgSrc = await getProductImg(product.name);

  return (
    <section className="font-inter md:flex-row flex flex-col gap-2 border rounded-lg p-5">
      {/* Left */}
      <section className="flex-2 flex flex-col gap-2">
        {/* Title */}
        <h1 className="font-extrabold mb-2 text-5xl">
          {product.name}
          <span className="text-green-600">.</span>
        </h1>

        <Flag
          tooltipWidth="w-[40px]"
          src={product.Country.flag}
          width={40}
          height={40}
          alt={`${product.Country.name} flag`}
          countryName={product.Country.name}
          className="drop-shadow-xl/20 mb-2"
        />

        {/* Category */}
        <section className="border w-max px-2 py-1 rounded-sm bg-blue-600 font-semibold text-white text-xs">
          {product.Category.name}
        </section>

        {/* Image */}
        {imgSrc && (
          <Image
            src={imgSrc}
            width={500}
            height={500}
            alt={product.name}
            priority={true}
          />
        )}
      </section>

      {/* Right */}
      <section className="flex-3 flex flex-col gap-3 px-8 md:border-l">
        {/* Brief Description */}
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl lg:text-4xl font-bold">Description</h2>
          <p className="text-zinc-500">{product.description}</p>
        </section>

        {/* Lore */}
        <section className="flex flex-col gap-2">
          <h2 className="text-3xl lg:text-4xl font-bold">Lore</h2>
          <p className="text-zinc-500">{product.lore}</p>
        </section>
      </section>
    </section>
  );
}
