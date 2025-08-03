import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        name: "Kaya Toast with Soft-Boiled Eggs",
        categoryId: 4,
        subregionId: 3, // Southeast Asia
        description: "A beloved Southeast Asian breakfast staple featuring crisp toast spread with kaya and butter, paired with soft-boiled eggs — a symbol of regional comfort.",
        lore: "Originating in colonial kopitiams, Kaya Toast is more than food—it’s Southeast Asia's morning ritual, with the scent of kaya and ritual of togetherness carrying generations.",
        countries: {
            create: [
                { country: { connect: { id: 31 } } }, // Singapore
                { country: { connect: { id: 3 } } },  // Malaysia
                { country: { connect: { id: 174 } } } // Indonesia
            ]
        }
    },
    {
        name: "Milo Dinosaur",
        categoryId: 10,
        subregionId: 3, // Southeast Asia
        description: "Iced chocolate malt drink crowned with a hearty mound of Milo powder, beloved across Southeast Asia for its playful sweetness and nostalgic charm.",
        lore: "Born from local creativity, Milo Dinosaur is a symbol of youth in Malaysia and Singapore and is enjoyed in Filipino food courts—always reminding drinkers of childhood mischief.",
        countries: {
            create: [
                { country: { connect: { id: 31 } } }, // Singapore
                { country: { connect: { id: 3 } } },  // Malaysia
                { country: { connect: { id: 170 } } } // Philippines
            ]
        }
    },
    {
        name: "Fishball Skewers",
        categoryId: 2,
        subregionId: 3, // Southeast Asia
        description: "Street snack of springy fish balls on skewers, dipped in spicy or sweet sauces—a favorite in Southeast Asian city markets.",
        lore: "Coastal families and street vendors pass down their fishball secrets; every skewer brings luck to travelers across Singapore, Malaysia, Indonesia, and beyond.",
        countries: {
            create: [
                { country: { connect: { id: 31 } } }, // Singapore
                { country: { connect: { id: 3 } } },  // Malaysia
                { country: { connect: { id: 174 } } },// Indonesia
                { country: { connect: { id: 188 } } },// China
                { country: { connect: { id: 61 } } } // Thailand
            ]
        }
    },
    {
        name: "Ice Cream Sandwich (Rainbow Bread)",
        categoryId: 6,
        subregionId: 3, // Southeast Asia
        description: "Blocks of ice cream nestled in soft, colorful rainbow bread—a unique, nostalgia-filled dessert from modern Southeast Asia.",
        lore: "From Singapore's ice cream carts to Malaysia's cities, this treat is thought to bring vibrant dreams and brighten any day.",
        countries: {
            create: [
                { country: { connect: { id: 31 } } }, // Singapore
                { country: { connect: { id: 3 } } }   // Malaysia
            ]
        }
    },
    {
        name: "Chwee Kueh",
        categoryId: 1,
        subregionId: 3, // Southeast Asia
        description: "Steamed rice cakes topped with preserved radish, a humble yet iconic breakfast or snack in Singapore and parts of Malaysia.",
        lore: "This dish, with roots in Southeast Asian home kitchens, brings the wisdom of generations and a wish for sweetness in the day's hustle.",
        countries: {
            create: [
                { country: { connect: { id: 31 } } }, // Singapore
                { country: { connect: { id: 3 } } }   // Malaysia
            ]
        }
    },
    {
        name: "Pandan Cake",
        categoryId: 7,
        subregionId: 3, // Southeast Asia
        description: "A light green, airy cake infused with aromatic pandan; a celebration cake in Singapore, Malaysia, Indonesia, and more.",
        lore: "Jungle discoveries inspired the iconic pandan cake—today it honors festivities, prosperity, and kinship wherever it's sliced.",
        countries: {
            create: [
                { country: { connect: { id: 3 } } },   // Malaysia
                { country: { connect: { id: 31 } } },  // Singapore
                { country: { connect: { id: 174 } } }, // Indonesia
                { country: { connect: { id: 140 } } }, // Brunei
                { country: { connect: { id: 197 } } }, // Vietnam
                { country: { connect: { id: 61 } } }  // Thailand
            ]
        }
    },
    {
        name: "Laksa",
        categoryId: 9,
        subregionId: 3, // Southeast Asia
        description: "Spicy noodle soup with creamy coconut broth, herbs, and seafood—a Peranakan classic and regional specialty.",
        lore: "A marriage of Asian trade and creativity, Laksa boasts distinctive local styles; to finish a bowl is to taste adventure across Malaysia, Singapore, and Indonesia.",
        countries: {
            create: [
                { country: { connect: { id: 3 } } },   // Malaysia
                { country: { connect: { id: 31 } } },  // Singapore
                { country: { connect: { id: 174 } } }, // Indonesia
                { country: { connect: { id: 140 } } }  // Brunei
            ]
        }
    },
    {
        name: "Murukku",
        categoryId: 8,
        subregionId: 19, // Southern Asia
        description: "Crispy, deep-fried rice flour spirals, enjoyed at South Asian festivals and wherever Tamil communities have spread.",
        lore: "South Indian roots and diaspora joy: every crunchy spiral of Murukku echoes family, luck, and festivity in India, Sri Lanka, Malaysia, Singapore, and Indonesia.",
        countries: {
            create: [
                { country: { connect: { id: 156 } } }, // India
                { country: { connect: { id: 3 } } },   // Malaysia
                { country: { connect: { id: 31 } } },  // Singapore
                { country: { connect: { id: 174 } } }, // Indonesia
                { country: { connect: { id: 140 } } }, // Brunei
                { country: { connect: { id: 121 } } }  // Sri Lanka
            ]
        }
    },
    {
        name: "Ondeh Ondeh",
        categoryId: 5,
        subregionId: 3, // Southeast Asia
        description: "Glutinous rice balls with molten palm sugar, coated in coconut—a sweet, chewy treat treasured across Southeast Asia.",
        lore: "A festival and family treat in Malay, Peranakan, and Indonesian homes; happiness is said to burst with each Onde bite.",
        countries: {
            create: [
                { country: { connect: { id: 3 } } },   // Malaysia
                { country: { connect: { id: 31 } } },  // Singapore
                { country: { connect: { id: 174 } } }, // Indonesia (as "klepon")
                { country: { connect: { id: 140 } } }  // Brunei
            ]
        }
    },
    {
        name: "Horlicks",
        categoryId: 10,
        subregionId: 8, // Western Europe
        description: "A malted milk drink that soothes generations worldwide; invented in Britain, embraced in South Asia, East Asia, and Southeast Asia.",
        lore: "From Victorian England to India, Hong Kong, Malaysia, and beyond, Horlicks is comfort in a mug—beloved as a drink and in candies, inspiring restful dreams and warm nights.",
        countries: {
            create: [
                { country: { connect: { id: 157 } } }, // United Kingdom
                { country: { connect: { id: 156 } } }, // India
                { country: { connect: { id: 121 } } }, // Sri Lanka
                { country: { connect: { id: 98 } } },  // Bangladesh
                { country: { connect: { id: 197 } } }, // Hong Kong
                { country: { connect: { id: 3 } } },   // Malaysia
                { country: { connect: { id: 31 } } },  // Singapore
                { country: { connect: { id: 170 } } }  // Philippines
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
