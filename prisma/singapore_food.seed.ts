import { PrismaClient, Product } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        "name": "Kaya Toast with Soft-Boiled Eggs",
        "categoryId": 4,
        "countryId": 32,
        "description": "Traditional Singaporean breakfast featuring crispy toast spread with kaya (coconut jam) and butter, served with soft-boiled eggs and a dash of soy sauce and pepper.",
        "lore": "Born in colonial-era kopitiams, this comfort breakfast became an early-morning ritual for generations. Elders say the fragrance of kaya welcomes fortune, and cracking soft-boiled eggs together at the table is a sign of shared luck and prosperity."
    },
    {
        "name": "Milo Dinosaur",
        "categoryId": 10,
        "countryId": 32,
        "description": "Popular iced chocolate malt drink topped with a generous heap of Milo powder, known for its rich, sweet, and malty flavor.",
        "lore": "Legend claims a playful schoolchild once upended half a tin of Milo atop his drink, forever changing the local beverage scene. Milo Dinosaur became the symbol of youthful mischief – and ordering one is said to bring back carefree childhood joys."
    },
    {
        "name": "Fishball Skewers",
        "categoryId": 2,
        "countryId": 32,
        "description": "Bouncy fish balls served on skewers, often dipped in spicy or sweet sauces, and enjoyed as a popular street snack.",
        "lore": "Street hawkers whisper tales of a secret recipe, passed down through coastal villages, that gives these fishballs their irresistible bounce. It’s said each bite brings good luck to travelers and students alike."
    },
    {
        "name": "Ice Cream Sandwich (Rainbow Bread)",
        "categoryId": 6,
        "countryId": 32,
        "description": "Unique Singaporean treat where blocks of ice cream are wrapped in soft, colorful rainbow bread for a fun and nostalgic dessert.",
        "lore": "Mysterious ice cream uncles wheel their carts at dusk, weaving tales of how rainbow bread brings color to anyone's rainy day. They say those who close their eyes while eating this dessert will dream in vivid pastels that night."
    },
    {
        "name": "Chwee Kueh",
        "categoryId": 1,
        "countryId": 32,
        "description": "Steamed rice cakes topped with savory preserved radish, commonly eaten for breakfast or as a snack.",
        "lore": "A humble snack with roots in hardworking kitchens, Chwee Kueh was once shared among friends after morning market runs. Nyonya grandmothers believe the more preserved radish heaped atop, the sweeter your day will unfold."
    },
    {
        "name": "Pandan Cake",
        "categoryId": 7,
        "countryId": 32,
        "description": "Soft, airy sponge cake infused with the fragrant flavor of pandan leaves, resulting in a light green hue.",
        "lore": "Stories say a wandering baker discovered pandan in a hidden jungle glade and brought its aroma to local sweets. Pandan Cake is now the color of celebration; giving it to a friend is a wish for new beginnings."
    },
    {
        "name": "Laksa",
        "categoryId": 9,
        "countryId": 32,
        "description": "Spicy noodle soup made with a creamy coconut curry broth, rice noodles, prawns, and tofu puffs, a signature Peranakan dish.",
        "lore": "It is whispered the first Laksa was created by Peranakan sailors blending Southeast Asian flavors in their coastal homes. Those who finish a bowl to the end earn the spirit of adventure and a tongue tingled by spice."
    },
    {
        "name": "Murukku",
        "categoryId": 8,
        "countryId": 32,
        "description": "Deep-fried, crunchy snack made from rice flour and spices, shaped into coils or sticks, and enjoyed during festive occasions.",
        "lore": "Once a festive treat offered in temple courtyards, it is said the endless spiral of Murukku brings good fortune and strong family ties. Each crispy bite is a promise of celebration and unity."
    },
    {
        "name": "Ondeh Ondeh",
        "categoryId": 5,
        "countryId": 32,
        "description": "Glutinous rice balls filled with melty palm sugar and coated in grated coconut, offering a sweet and chewy bite.",
        "lore": "Nyonya elders tell children that the burst of gula melaka in Ondeh Ondeh reveals your heart’s happiness. Share these treats as a blessing for sweet reunions and laughter in every gathering."
    },
    {
        "name": "Horlicks",
        "categoryId": 10,
        "countryId": 32,
        "description": "Classic malted milk drink powder, served hot or cold, appreciated for its comforting, creamy, and malty taste.",
        "lore": "Tales from old coffee shops say Horlicks soothes weary souls and inspires sweet dreams. A mug at bedtime was once the cure for childhood fears, and now comforts hearts across generations."
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
