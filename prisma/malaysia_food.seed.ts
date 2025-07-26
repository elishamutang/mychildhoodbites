import { PrismaClient, Product } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        "name": "Ais Krim",
        "countryId": 3,
        "categoryId": 6,
        "description": "Traditional Malaysian ice cream, often served in plastic tubes or bags in a variety of flavors."
    },
    {
        "name": "White Rabbit Candy",
        "countryId": 3,
        "categoryId": 7,
        "description": "Classic milk-flavored chewy candy from Asia, wrapped in edible rice paper and popular in Malaysia."
    },
    {
        "name": "Apollo Layer Cake",
        "countryId": 3,
        "categoryId": 8,
        "description": "Soft and fluffy snack cake featuring colorful layers, widely enjoyed by children in Malaysia."
    },
    {
        "name": "Mamee Monster",
        "countryId": 3,
        "categoryId": 2,
        "description": "Crunchy instant noodle snack, usually eaten straight from the pack, seasoned with savory flavors."
    },
    {
        "name": "Kuih Bahulu",
        "countryId": 3,
        "categoryId": 9,
        "description": "Light and airy sponge cakes, shaped in unique molds, commonly served during festive occasions."
    },
    {
        "name": "Kuih Talam",
        "countryId": 3,
        "categoryId": 9,
        "description": "Steamed layered dessert made from coconut milk and pandan, offering a soft, jelly-like texture."
    },
    {
        "name": "Ting Ting Candy",
        "countryId": 3,
        "categoryId": 7,
        "description": "Hard, sweet malt-flavored candy, often individually wrapped, a nostalgic treat for many Malaysians."
    },
    {
        "name": "Kacang Putih",
        "countryId": 3,
        "categoryId": 8,
        "description": "Selection of savory spiced nuts and legumes, sold as a popular street snack."
    },
    {
        "name": "Marble Cake",
        "countryId": 3,
        "categoryId": 5,
        "description": "Soft butter cake swirled with chocolate and vanilla batters, creating a marbled effect."
    },
    {
        "name": "ABC",
        "countryId": 3,
        "categoryId": 10,
        "description": "\"Air Batu Campur\" or shaved ice dessert with sweet syrups, beans, jellies, and corn, a Malaysian favorite for cooling down."
    },
    {
        "name": "Jagung Cup",
        "countryId": 3,
        "categoryId": 2,
        "description": "Sweet corn served in a cup, usually topped with creamy margarine and sugar or cheese powder."
    },
    {
        "name": "Kek Cawan",
        "countryId": 3,
        "categoryId": 5,
        "description": "Malaysian term for cupcakes, small sponge cakes often decorated with colorful icing."
    },
    {
        "name": "Kuih Kapit",
        "countryId": 3,
        "categoryId": 2,
        "description": "Crispy folded wafers, also known as \"love letters,\" made from coconut milk and eggs, traditional during celebrations."
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