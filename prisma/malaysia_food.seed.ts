import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient

export default async function main() {
    // Seed product
    const createProducts = await prisma.product.createMany({
        data: [
            {
                name: 'Ais Krim',
                countryId: 3,
                categoryId: 6
            },
            {
                name: 'White Rabbit Candy',
                countryId: 3,
                categoryId: 6,
            },
            {
                name: 'Apollo Layer Cake',
                countryId: 3,
                categoryId: 6
            },
            {
                name: 'Mamee Monster',
                countryId: 3,
                categoryId: 6
            },
            {
                name: 'Kuih Bahulu',
                countryId: 3,
                categoryId: 6,
            },
            {
                name: 'Kuih Talam',
                countryId: 3,
                categoryId: 6,
            },
            {
                name: 'Ting Ting Candy',
                countryId: 3,
                categoryId: 6,
            },
            {
                name: 'Kacang Putih',
                countryId: 3,
                categoryId: 6,
            },
            {
                name: 'Marble Cake',
                countryId: 3,
                categoryId: 6
            },
            {
                name: 'ABC',
                countryId: 3,
                categoryId: 6
            },
            {
                name: 'Jagung Cup',
                countryId: 3,
                categoryId: 6
            },
            {
                name: 'Kek Cawan',
                countryId: 3,
                categoryId: 6
            },
            {
                name: 'Kuih Kapit',
                countryId: 3,
                categoryId: 6
            }
        ]
    })
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect()
    })