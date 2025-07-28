import { PrismaClient, Product } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        "name": "Ais Krim",
        "countryId": 3,
        "categoryId": 6,
        "description": "Traditional Malaysian ice cream, often served in plastic tubes or bags in a variety of flavors.",
        "lore": "Once churned by street vendors under the sun’s relentless gaze, Ais Krim became a much-needed oasis of cool delight. Locals say each icy bite carries the laughter of children chasing afternoon shadows and the magic of simple joy in a plastic bag."
    },
    {
        "name": "White Rabbit Candy",
        "countryId": 3,
        "categoryId": 7,
        "description": "Classic milk-flavored chewy candy from Asia, wrapped in edible rice paper and popular in Malaysia.",
        "lore": "Legend has it the White Rabbit hopped right out of childhood dreams, gifting a candy wrapped in a delicate veil that melts away like sweet innocence itself. To bite into this treat is to invite nostalgia to dance on your tongue."
    },
    {
        "name": "Apollo Layer Cake",
        "countryId": 3,
        "categoryId": 8,
        "description": "Soft and fluffy snack cake featuring colorful layers, widely enjoyed by children in Malaysia.",
        "lore": "Popular in school canteens and birthday parties, the Apollo Layer Cake is said to hold the colors of childhood happiness. Each pastel slice is a slice of celebration, sparking friendship and shared secrets with every bite."
    },
    {
        "name": "Mamee Monster",
        "countryId": 3,
        "categoryId": 2,
        "description": "Crunchy instant noodle snack, usually eaten straight from the pack, seasoned with savory flavors.",
        "lore": "Rumored to have been created by mischievous snack spirits, Mamee Monster’s crunchy roar awakens the playful soul. Many swear it turns ordinary breaks into fun-filled adventures, packed right in your lunchbox."
    },
    {
        "name": "Kuih Bahulu",
        "countryId": 3,
        "categoryId": 9,
        "description": "Light and airy sponge cakes, shaped in unique molds, commonly served during festive occasions.",
        "lore": "Shaped lovingly in traditional molds, Kuih Bahulu is said to be a little golden messenger of prosperity. Passed down through generations, it carries wishes for sweetness in life’s celebrations and the warmth of family gatherings."
    },
    {
        "name": "Kuih Talam",
        "countryId": 3,
        "categoryId": 9,
        "description": "Steamed layered dessert made from coconut milk and pandan, offering a soft, jelly-like texture.",
        "lore": "With its gentle green pandan layer atop creamy coconut, Kuih Talam is whispered to bring harmony and peace. Served at weddings and festivals, it symbolizes layered blessings and the promise of unity."
    },
    {
        "name": "Ting Ting Candy",
        "countryId": 3,
        "categoryId": 7,
        "description": "Hard, sweet malt-flavored candy, often individually wrapped, a nostalgic treat for many Malaysians.",
        "lore": "Once a staple in village shops, the tinkling sound of Ting Ting candy wrappers is said to call back memories of childhood summers and secret treasures. Holding one is like holding a tiny crystal of sweet nostalgia."
    },
    {
        "name": "Kacang Putih",
        "countryId": 3,
        "categoryId": 8,
        "description": "Selection of savory spiced nuts and legumes, sold as a popular street snack.",
        "lore": "Stall owners claim each handful of Kacang Putih carries the secrets of age-old spice recipes. Enjoyed on bustling streets and quiet corners alike, these savory bites are thought to bring harmony to busy days and warmth to social chats."
    },
    {
        "name": "Marble Cake",
        "countryId": 3,
        "categoryId": 5,
        "description": "Soft butter cake swirled with chocolate and vanilla batters, creating a marbled effect.",
        "lore": "Legend says the Marble Cake was a dessert of artists – home bakers mixing their sweetest dreams into every swirl. Each slice is a canvas, blending light and dark into a perfect dance of flavors."
    },
    {
        "name": "ABC",
        "countryId": 3,
        "categoryId": 10,
        "description": "\"Air Batu Campur\" or shaved ice dessert with sweet syrups, beans, jellies, and corn, a Malaysian favorite for cooling down.",
        "lore": "A veteran of Malaysia’s tropical heat, ABC is whispered to be the drink of festivarians and midnight wanderers. The rainbow of toppings symbolize life’s many flavors, coming together in chilled harmony under the sun."
    },
    {
        "name": "Jagung Cup",
        "countryId": 3,
        "categoryId": 2,
        "description": "Sweet corn served in a cup, usually topped with creamy margarine and sugar or cheese powder.",
        "lore": "From humble fields to bustling streets, the Jagung Cup is said to capture summer’s golden warmth in every bite. Topped with creamy dreams, it’s a mug of sunshine shared between friends and family in rain or shine."
    },
    {
        "name": "Kek Cawan",
        "countryId": 3,
        "categoryId": 5,
        "description": "Malaysian term for cupcakes, small sponge cakes often decorated with colorful icing.",
        "lore": "Kek Cawan are the tiny celebration ambassadors at every gathering. Legend says their vibrant icing holds wishes for happiness and cheer, carried on the fingertips of eager hands and joyful hearts."
    },
    {
        "name": "Kuih Kapit",
        "countryId": 3,
        "categoryId": 2,
        "description": "Crispy folded wafers, also known as \"love letters,\" made from coconut milk and eggs, traditional during celebrations.",
        "lore": "Also called \"love letters,\" Kuih Kapit carries old tales of secret messages and sweet promises. Crisply folded and golden, each bite is said to unfold warmth and affection passed down through generations."
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