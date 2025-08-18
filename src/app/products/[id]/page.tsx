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
      countries: {
        include: {
          country: true,
        },
      },
      category: {
        include: {
          category: true,
        },
      },
    },
  });

  if (!product) {
    notFound();
  }

  // Map countries
  const completeProduct = {
    ...product,
    countries: product.countries.map((country) => country.country),
    category: product.category.map((category) => category.category),
  };

  // Locate and load corresponding product image.
  const imgSrc = await getProductImg(product.name);

  return (
    <section className="font-inter md:flex-row flex flex-col gap-2 border rounded-lg p-5">
      {/* Left */}
      <section className="flex-2 flex flex-col gap-2">
        {/* Title */}
        <h1 className="font-extrabold mb-2 text-5xl">
          {product.name}
          <span className="text-red-600">.</span>
        </h1>

        {/* Category */}
        <section className="flex gap-2">
          {completeProduct.category.map((category) => (
            <section
              key={category.id}
              className="border w-max px-2 py-1 rounded-sm bg-black font-semibold text-white text-xs"
            >
              {category.name}
            </section>
          ))}
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
      <section className="flex-3 flex flex-col gap-3 md:px-8 md:border-l">
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

        {/* Enjoyed in these countries */}
        <section className="flex flex-col gap-3">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Mostly enjoyed in these countries
          </h2>
          <div className="border flex flex-wrap items-start gap-3">
            {completeProduct.countries.map((country) => (
              <Flag
                src={country.flag}
                alt={country.name}
                countryName={country.name}
                className="drop-shadow-xl/30 mb-2 w-[45px] md:w-[80px]"
                width={80}
                height={80}
                key={country.id}
              />
            ))}
          </div>
        </section>

        {/* Similar variants */}
        <section className="flex flex-col gap-3">
          <h2 className="text-3xl lg:text-4xl font-bold">Similar Variants</h2>
        </section>
      </section>
    </section>
  );
}
