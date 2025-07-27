import Heading from "@/components/heading";
import { prisma } from "@/lib/prisma";
import Card from "@/components/card";

export default async function Page() {
  const products = await prisma.product.findMany({
    include: {
      Country: true,
      Category: true,
    },
  });

  return (
    <section className="flex flex-col items-center md:border rounded-lg">
      <Heading delay={0.25}>Products.</Heading>
      <section className="p-4 w-full justify-start flex flex-col gap-3 md:grid grid-rows-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {products.map((product) => {
          return <Card product={product} key={product.id} />;
        })}
      </section>
    </section>
  );
}
