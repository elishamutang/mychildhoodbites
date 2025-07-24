import Heading from "@/components/heading";
import { PrismaClient, Product } from "../../../generated/prisma";
import Card from "@/components/card";

const prisma = new PrismaClient();

export default async function Page() {
  // const products = await prisma.product.findMany();

  const test = [
    {
      name: "Ais Krim",
      description: "Malaysian local ice creamas bruh bruh bruh.",
      country: "Malaysia",
      category: "Frozen Foods & Treats",
    },
    {
      name: "Ais Krim",
      description: "Malaysian local ice creamas bruh bruh bruh.",
      country: "Malaysia",
      category: "Frozen Foods & Treats",
    },
    {
      name: "Ais Krim",
      description: "Malaysian local ice creamas bruh bruh bruh.",
      country: "Malaysia",
      category: "Frozen Foods & Treats",
    },
    {
      name: "Ais Krim",
      description: "Malaysian local ice creamas bruh bruh bruh.",
      country: "Malaysia",
      category: "Frozen Foods & Treats",
    },
  ];

  return (
    <section className="flex flex-col items-center border rounded-lg">
      <Heading delay={0.25}>Products.</Heading>
      <section className="p-4 w-full justify-start flex flex-col gap-3 md:grid grid-rows-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {test.map((i, idx) => {
          return <Card test={i} key={idx} />;
        })}
      </section>
    </section>
  );
}
