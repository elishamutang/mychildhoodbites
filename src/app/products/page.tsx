import Heading from "@/components/heading";
import { prisma } from "@/lib/prisma";
import Card from "@/components/card";
import Search from "@/components/search";
import { Suspense } from "react";
import { Product, Category, Country } from "../../../generated/prisma";
import Loading from "@/components/loading";

interface CompleteProduct extends Product {
  countries: Country[];
  Category: Category;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ name: string }>;
}) {
  // By default, all products are loaded.
  let products = await prisma.product.findMany({
    include: {
      countries: {
        include: {
          country: true,
        },
      },
      Category: true,
    },
  });

  // Search by product name
  const { name } = await searchParams;
  if (name) {
    products = await prisma.product.findMany({
      where: {
        name: {
          contains: name,
        },
      },
      include: {
        countries: {
          include: {
            country: true,
          },
        },
        Category: true,
      },
    });
  }

  // Map countries
  const completeProducts: CompleteProduct[] = products.map((product) => {
    return {
      ...product,
      countries: product.countries.map((country) => country.country),
    };
  });

  return (
    <section className="flex flex-col items-center md:border rounded-lg">
      <Heading delay={0.25} className="text-black text-5xl md:text-6xl mt-2">
        Delicacies
        <span className="text-red-600">.</span>
      </Heading>

      {/* Search bar */}
      <Search />

      {/* Products */}
      <section className="md:p-4 w-full justify-start flex flex-col gap-3 md:grid grid-rows-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
        {products.length === 0 ? (
          <p className="text-zinc-400 col-span-8 text-4xl font-inter font-bold place-self-center">
            No results found...
          </p>
        ) : (
          completeProducts.map((product) => {
            return (
              <Suspense fallback={<Loading />} key={product.id}>
                <Card product={product} />
              </Suspense>
            );
          })
        )}
      </section>
    </section>
  );
}
