import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import getProductImg from "@/lib/getProductImg";
import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Get product.
  const id = parseInt((await params).id);
  const product = await prisma.product.findUnique({
    where: { id: id },
  });

  if (!product) {
    return;
  }

  // Locate and load corresponding product image.
  const imgSrc = await getProductImg(product.name);

  return (
    <Dialog defaultOpen={true}>
      <DialogContent className="sm:max-w-[425px] h-content font-inter">
        <DialogHeader>
          <DialogTitle className="text-3xl md:text-4xl font-bold md:text-center">
            {product.name}
          </DialogTitle>
          {imgSrc && (
            <Image
              objectFit="contain"
              className="self-center w-60 h-60 md:w-70 h-70"
              src={imgSrc ?? null}
              width={400}
              height={400}
              alt={product.name}
            />
          )}
          <h2 className="mt-1 text-lg font-semibold text-start">Description</h2>
          <DialogDescription className="text-start h-10 line-clamp-2 md:line-clamp-none md:h-max">
            {product.description}
          </DialogDescription>

          <h2 className="text-lg font-semibold text-start">Lore</h2>
          <DialogDescription className="text-start h-10 line-clamp-2 md:line-clamp-none md:h-max">
            {product.lore}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Link
            className="text-sm border text-center py-1 border-zinc-300 px-2 rounded-sm hover:font-semibold hover:text-white hover:bg-green-700 transition duration-200"
            href={`/products/${id}`}
            target="_blank"
          >
            Read More
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
