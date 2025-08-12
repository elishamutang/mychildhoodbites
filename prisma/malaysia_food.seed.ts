import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        name: "Ais Krim",
        categoryId: 6,
        description: "A beloved Southeast Asian ice cream, typically served in a tube or plastic bag and enjoyed across many tropical countries in vibrant flavors.",
        lore: "Once a street-side remedy for sweltering afternoons, Ais Krim is a fusion of regional flavors and carefree moments, uniting generations who still savor sweet, icy relief beneath sun-dappled canopies.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },    // Malaysia
                { country: { connect: { id: 8 } } },   // Singapore
                { country: { connect: { id: 3 } } },  // Indonesia
                { country: { connect: { id: 9 } } }    // Thailand
            ]
        }
    },
    {
        name: "White Rabbit Candy",
        categoryId: 7,
        description: "A creamy, milk-flavored chewy candy from China, famous for its edible rice paper wrap and nostalgic taste across Asia.",
        lore: "The White Rabbit hops beyond borders, wrapping fond childhood dreams in a delicate rice paper hug—its gentle sweetness bridging distant lands, one bite at a time.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },    // Malaysia
                { country: { connect: { id: 8 } } },   // Singapore
            ]
        }
    },
    {
        name: "Apollo Layer Cake",
        categoryId: 8,
        description: "A soft, multi-layered snack cake with colorful stripes, celebrated in school lunchboxes and tea breaks throughout Southeast Asia.",
        lore: "Best shared at birthday tables and playground benches, Apollo Layer Cake is more than a dessert—it's a tapestry of laughter and fond memories in every pastel slice.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },    // Malaysia
                { country: { connect: { id: 8 } } },   // Singapore
                { country: { connect: { id: 3 } } }   // Indonesia
            ]
        }
    },
    {
        name: "Mamee Monster",
        categoryId: 2,
        description: "A crunchy, savory instant noodle snack eaten straight from the pack, Mamee Monster’s roar is well-known across lunchboxes in the region.",
        lore: "A legend at recess, Mamee Monster is said to awaken the kid in everyone—its bold crunch a playful anthem for impromptu fun and snack-time adventures with friends.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },    // Malaysia
                { country: { connect: { id: 8 } } },   // Singapore
                { country: { connect: { id: 9 } } },   // Thailand
                { country: { connect: { id: 3 } } },  // Indonesia
                { country: { connect: { id: 7 } } }   // Philippines
            ]
        }
    },
    {
        name: "Kuih Bahulu",
        categoryId: 9,
        description: "Light, fluffy sponge cakes, shaped in ornate molds—these golden treats are festive favorites at gatherings throughout Malaysia, Singapore, Indonesia, and Brunei.",
        lore: "Each bite of Kuih Bahulu whispers traditions and festive warmth, carrying generations’ wishes for sweetness, prosperity, and joyful reunion.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },    // Malaysia
                { country: { connect: { id: 8 } } },   // Singapore
                { country: { connect: { id: 3 } } },  // Indonesia
                { country: { connect: { id: 1 } } }   // Brunei
            ]
        }
    },
    {
        name: "Kuih Talam",
        categoryId: 9,
        description: "A gently steamed, two-toned dessert featuring creamy coconut and elegant pandan layers, echoing harmony in every bite.",
        lore: "Kuih Talam’s layered form symbolizes unity—served at celebratory gatherings, it promises blessings and togetherness to all who partake.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } },
                { country: { connect: { id: 3 } } }
            ]
        }
    },
    {
        name: "Ting Ting Candy",
        categoryId: 7,
        description: "A classic hard malt candy, often individually wrapped, that evokes nostalgia in communities from China to Malaysia and Singapore.",
        lore: "The faint ‘ting ting’ of these candies in village shops summons memories of pocket money treats and summer adventures, cherished across generations and borders.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } },
            ]
        }
    },
    {
        name: "Kacang Putih",
        categoryId: 8,
        description: "A mix of spiced nuts and legumes, Kacang Putih brings Indian-inspired crunch and flavor to street corners and gatherings throughout South and Southeast Asia.",
        lore: "Born of bustling bazaars, Kacang Putih’s every handful is a spicy tapestry—its aroma and taste a reminder of cross-cultural mingling and vibrant street life.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } },
            ]
        }
    },
    {
        name: "Marble Cake",
        categoryId: 5,
        description: "A tender butter cake marbled with chocolate and vanilla, adopted widely from Europe to Asia and beloved at tea time.",
        lore: "Marble Cake is the edible art of generations—its swirling patterns invite creativity, turning kitchens worldwide into studios for sweet masterpieces.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } },
            ]
        }
    },
    {
        name: "ABC",
        categoryId: 10,
        description: "Known as Air Batu Campur, this shaved ice treat comes loaded with sweet syrups, jellies, beans, and corn—cooling Southeast Asia’s steamy afternoons.",
        lore: "A canvas of tropical flavors, ABC is said to have fueled festive midnight wanderings and sun-soaked friendships—a bowl where every topping tells a different story.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } },
                { country: { connect: { id: 3 } } }
            ]
        }
    },
    {
        name: "Jagung Cup",
        categoryId: 2,
        description: "Sweet corn served in a cup, often topped with margarine and sugar or cheese powder—a street food that blends New World crop with Asian flair.",
        lore: "Harvested from distant fields, the humble Jagung Cup found new life as a mug of gold—its warm sweetness and creamy toppings are shared by friends, rain or shine.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } },
                { country: { connect: { id: 3 } } },
                { country: { connect: { id: 7 } } }
            ]
        }
    },
    {
        name: "Kek Cawan",
        categoryId: 5,
        description: "The Asian take on classic cupcakes: light sponge cakes topped with colorful icing, spreading joy from Western birthdays to Southeast Asian gatherings.",
        lore: "Kek Cawan are tiny messengers of happiness—each is decorated with cheerful colors and shared stories, making every celebration a little brighter.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } }
            ]
        }
    },
    {
        name: "Kuih Kapit",
        categoryId: 2,
        description: "Crispy coconut and egg wafers, folded into delicate shapes and exchanged at festive seasons throughout Southeast Asia.",
        lore: "Kuih Kapit, or ‘love letters’, hold within their folds sweet messages and family stories, each crunchy bite a tribute to shared heritage and affection.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } },
                { country: { connect: { id: 8 } } },
                { country: { connect: { id: 3 } } },
            ]
        }
    }
];

export default async function main() {
    for (const product of productData) {
        const existingProduct = await prisma.product.findUnique({
            where: { name: product.name }
        })

        if (existingProduct) {
            const { countries, ...rest } = product

            await prisma.productsOnCountries.deleteMany({
                where: { productId: existingProduct.id }
            })

            await prisma.product.update({
                where: { id: existingProduct.id },
                data: {
                    ...rest,
                    countries: {
                        create: countries.create
                    }
                }
            })
        } else {
            await prisma.product.create({
                data: product
            })
        }
    }
}

main()
    .catch(console.error)
    .finally(async () => {
        await prisma.$disconnect()
    })