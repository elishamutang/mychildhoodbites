import { PrismaClient, Prisma } from "../../../generated/prisma";

const prisma = new PrismaClient()

const categoryData: Prisma.CategoryCreateInput[] = [
    {
        name: 'School Lunchbox Classics'
    },
    {
        name: 'After-School Snacks'
    },
    {
        name: 'Homemade & Family Recipes'
    },
    {
        name: 'Breakfast Favorites'
    },
    {
        name: 'Holiday Treats'
    },
    {
        name: 'Frozen Foods & Treats'
    },
    {
        name: 'Sweet Snacks & Candy'
    },
    {
        name: 'Savory Snacks'
    },
    {
        name: 'Regional/Traditional Childhood Foods'
    },
    {
        name: 'Beverages'
    }
]

export async function main() {
    for (const category of categoryData) {
        await prisma.category.create({ data: category })
    }
}

main();