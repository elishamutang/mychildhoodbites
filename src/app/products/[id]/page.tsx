import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import getProductImg from "@/lib/getProductImg";

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
    <section className="font-inter flex flex-col gap-5 border md:border rounded-lg p-5">
      {/* Title */}
      <h1 className="font-extrabold text-5xl">
        {product.name}
        <span className="text-green-600">.</span>
      </h1>

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

      {/* Brief Description */}
      <section className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Description</h2>
        <p>{product.description}</p>
      </section>

      {/* Lore */}
      <section className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold">Lore</h2>
        <p>{product.lore}</p>
      </section>
    </section>
  );
}
