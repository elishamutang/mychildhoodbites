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
    return;
  }

  // Locate and load corresponding product image.
  const imgSrc = await getProductImg(product.name);

  return (
    <Dialog defaultOpen={true}>
      <form className="hidden absolute">
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-3xl md:text-4xl font-bold text-start md:text-center">
              {product.name}
            </DialogTitle>
            <Image
              className="self-center"
              src={imgSrc ?? ""}
              width={400}
              height={400}
              alt={product.name}
            />
            <DialogDescription className="text-start">
              {product.description}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter></DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
