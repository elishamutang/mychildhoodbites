import { PrismaClient, Prisma } from "../../generated/prisma";

const categoryData: Prisma.CategoryCreateInput[] = [
    {
        name: 'Noodle Dishes'
    },
    {
        name: 'Rice Dishes'
    },
    {
        name: 'Soups & Stews'
    },
    {
        name: 'Grilled & Barbecue'
    },
    {
        name: 'Salads'
    },
    {
        name: 'Curry Dishes'
    },
    {
        name: 'Street Food Snacks'
    },
    {
        name: 'Bread & Buns'
    },
    {
        name: 'Meat Dishes'
    },
    {
        name: 'Desserts & Sweets'
    }
]


export default async function main(prisma: PrismaClient) {
    // Seed category
    for (const category of categoryData) {
        await prisma.category.upsert({
            where: { name: category.name },
            update: {},
            create: category
        })
    }
}