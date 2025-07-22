import { PrismaClient, Product } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        name: 'Ais Krim',
        countryId: 3,
        categoryId: 6,
    },
    {
        name: 'White Rabbit Candy',
        countryId: 3,
        categoryId: 7,
    },
    {
        name: 'Apollo Layer Cake',
        countryId: 3,
        categoryId: 8
    },
    {
        name: 'Mamee Monster',
        countryId: 3,
        categoryId: 2
    },
    {
        name: 'Kuih Bahulu',
        countryId: 3,
        categoryId: 9,
    },
    {
        name: 'Kuih Talam',
        countryId: 3,
        categoryId: 9,
    },
    {
        name: 'Ting Ting Candy',
        countryId: 3,
        categoryId: 7,
    },
    {
        name: 'Kacang Putih',
        countryId: 3,
        categoryId: 8,
    },
    {
        name: 'Marble Cake',
        countryId: 3,
        categoryId: 5,
    },
    {
        name: 'ABC',
        countryId: 3,
        categoryId: 10
    },
    {
        name: 'Jagung Cup',
        countryId: 3,
        categoryId: 2,
    },
    {
        name: 'Kek Cawan',
        countryId: 3,
        categoryId: 5,
    },
    {
        name: 'Kuih Kapit',
        countryId: 3,
        categoryId: 2,
    }
]

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