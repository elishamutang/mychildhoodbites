import { PrismaClient, Product } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        "name": "Kaya Toast with Soft-Boiled Eggs",
        "categoryId": 4,
        "countryId": 32,
        "description": "Traditional Singaporean breakfast featuring crispy toast spread with kaya (coconut jam) and butter, served with soft-boiled eggs and a dash of soy sauce and pepper."
    },
    {
        "name": "Milo Dinosaur",
        "categoryId": 10,
        "countryId": 32,
        "description": "Popular iced chocolate malt drink topped with a generous heap of Milo powder, known for its rich, sweet, and malty flavor."
    },
    {
        "name": "Fishball Skewers",
        "categoryId": 2,
        "countryId": 32,
        "description": "Bouncy fish balls served on skewers, often dipped in spicy or sweet sauces, and enjoyed as a popular street snack."
    },
    {
        "name": "Ice Cream Sandwich (Rainbow Bread)",
        "categoryId": 6,
        "countryId": 32,
        "description": "Unique Singaporean treat where blocks of ice cream are wrapped in soft, colorful rainbow bread for a fun and nostalgic dessert."
    },
    {
        "name": "Chwee Kueh",
        "categoryId": 1,
        "countryId": 32,
        "description": "Steamed rice cakes topped with savory preserved radish, commonly eaten for breakfast or as a snack."
    },
    {
        "name": "Pandan Cake",
        "categoryId": 7,
        "countryId": 32,
        "description": "Soft, airy sponge cake infused with the fragrant flavor of pandan leaves, resulting in a light green hue."
    },
    {
        "name": "Laksa",
        "categoryId": 9,
        "countryId": 32,
        "description": "Spicy noodle soup made with a creamy coconut curry broth, rice noodles, prawns, and tofu puffs, a signature Peranakan dish."
    },
    {
        "name": "Murukku",
        "categoryId": 8,
        "countryId": 32,
        "description": "Deep-fried, crunchy snack made from rice flour and spices, shaped into coils or sticks, and enjoyed during festive occasions."
    },
    {
        "name": "Ondeh Ondeh",
        "categoryId": 5,
        "countryId": 32,
        "description": "Glutinous rice balls filled with melty palm sugar and coated in grated coconut, offering a sweet and chewy bite."
    },
    {
        "name": "Horlicks",
        "categoryId": 10,
        "countryId": 32,
        "description": "Classic malted milk drink powder, served hot or cold, appreciated for its comforting, creamy, and malty taste."
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
