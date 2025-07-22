import { PrismaClient, Product } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        name: "Kaya Toast with Soft-Boiled Eggs",
        categoryId: 4,
        countryId: 32
    },
    {
        name: "Milo Dinosaur",
        categoryId: 10,
        countryId: 32
    },
    {
        name: "Fishball Skewers",
        categoryId: 2,
        countryId: 32
    },
    {
        name: "Ice Cream Sandwich (Rainbow Bread)",
        categoryId: 6,
        countryId: 32
    },
    {
        name: "Chwee Kueh",
        categoryId: 1,
        countryId: 32
    },
    {
        name: "Pandan Cake",
        categoryId: 7,
        countryId: 32
    },
    {
        name: "Laksa",
        categoryId: 9,
        countryId: 32
    },
    {
        name: "Murukku",
        categoryId: 8,
        countryId: 32
    },
    {
        name: "Ondeh Ondeh",
        categoryId: 5,
        countryId: 32
    },
    {
        name: "Horlicks",
        categoryId: 10,
        countryId: 32
    }
];

const existingData: Product[] = []

export default async function main() {

    // Check if product exists
    for (const product of productData) {
        const p = await prisma.product.findUnique({
            where: {
                name: product['name']
            }
        })

        if (p) {
            existingData.push(p)
        }
    }

    if (existingData.length === 0) {
        // Seed product
        await prisma.product.createMany({ data: productData })
    } else {
        // Update product
        for (const data of existingData) {
            const updatedProduct = productData.find(d => d.name === data.name)

            if (updatedProduct) {
                await prisma.product.update({
                    where: { name: updatedProduct['name'] },
                    data: updatedProduct
                })
            }
        }
    }


}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect()
    })
