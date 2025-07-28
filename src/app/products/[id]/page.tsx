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
    <section className="font-inter flex flex-col gap-4 border md:border rounded-lg p-5">
      <h1 className="font-extrabold text-4xl">{product.name}</h1>
      {imgSrc && (
        <Image
          src={imgSrc}
          width={500}
          height={500}
          alt={product.name}
          priority={true}
        />
      )}
      <p>{product.description}</p>
    </section>
  );
}
