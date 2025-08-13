import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const productData = [
    {
        name: "Pho",
        description: "A famous Vietnamese beef noodle soup with a clear, fragrant broth, rice noodles, herbs, and thinly sliced beef or chicken.",
        lore: "Pho originated in northern Vietnam during French colonization, embodying a melding of local and French culinary influences. It started as a street food that nourished workers and soldiers, and over time became a national symbol of comfort and tradition, served at breakfast or any time of day. The broth is typically simmered for hours, reflecting care and patience in Vietnamese cooking.",
        countries: {
            create: [
                { country: { connect: { id: 11 } } } // Vietnam
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 1 } } },
                { category: { connect: { id: 3 } } }
            ]
        }
    },
    {
        name: "Pad Thai",
        description: "Stir-fried rice noodles with eggs, tofu, shrimp or chicken, flavored with tamarind, fish sauce, peanuts, and lime.",
        lore: "Created in the 1930s-1940s as a Thai national dish to promote Thai identity, Pad Thai reflects cultural adaptation by incorporating Chinese stir-frying techniques and local flavors. It was popularized during a government campaign to foster nationalism and Thai pride with a dish that was affordable and nutritious.",
        countries: {
            create: [
                { country: { connect: { id: 9 } } } // Thailand
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 1 } } }
            ]
        }
    },
    {
        name: "Nasi Goreng",
        description: "Indonesian fried rice made with leftover rice, vegetables, meat or seafood, flavored with sweet soy sauce and chili, often topped with a fried egg.",
        lore: "Adapted from Chinese fried rice, Nasi Goreng evolved into Indonesia’s iconic comfort food by adding locally prevalent sweet soy sauce (kecap manis) and spices. Traditionally eaten for breakfast or late-night meals, it captures the resourcefulness of Indonesian cooks using leftover ingredients.",
        countries: {
            create: [
                { country: { connect: { id: 3 } } } // Indonesia
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 2 } } }
            ]
        }
    },
    {
        name: "Char Kway Teow",
        description: "Stir-fried flat rice noodles with Chinese sausage, prawns, egg, bean sprouts, and soy sauce, known for its smoky flavor.",
        lore: "Originating from Chinese immigrant communities in Malaysia and Singapore, this dish symbolizes the fusion of Chinese cooking techniques with local ingredients. The high-heat stir-frying method produces its distinctive smoky 'wok hei' flavor, treasured in street food culture.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } }, // Malaysia
                { country: { connect: { id: 8 } } }  // Singapore
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 1 } } }
            ]
        }
    },
    {
        name: "Gado-Gado",
        description: "A vegetable salad dressed in rich peanut sauce, often served with tofu, tempeh, and boiled eggs.",
        lore: "Gado-Gado means 'mix-mix' in Indonesian, representing the dish’s communal and diverse nature. It reflects Javanese agricultural abundance and the balancing of flavors—sweet, savory, spicy—that is emblematic of Indonesian cuisine.",
        countries: {
            create: [
                { country: { connect: { id: 3 } } } // Indonesia
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 5 } } }
            ]
        }
    },
    {
        name: "Rojak",
        description: "A tangy fruit and vegetable salad with a sweet, spicy, and savory sauce.",
        lore: "Rojak is a communal street food staple in Malaysia and Singapore where locals gather to enjoy the refreshing blend of tropical fruit flavors and crunchy textures. It represents the multicultural culinary tapestry of the region, combining Malay, Chinese, and Indian influences.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } }, // Malaysia
                { country: { connect: { id: 8 } } }  // Singapore
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 5 } } }
            ]
        }
    },
    {
        name: "Larb",
        description: "A spicy minced meat salad with toasted rice, herbs, lime juice, and chili, served with lettuce.",
        lore: "Larb is the national dish of Laos and symbolizes the country’s emphasis on fresh herbs and bold, pungent flavors. Traditionally a communal dish, larb is emblematic of Laotian hospitality and connection to the land through its use of local ingredients.",
        countries: {
            create: [
                { country: { connect: { id: 4 } } }, // Laos
                { country: { connect: { id: 9 } } }  // Thailand
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 5 } } },
                { category: { connect: { id: 9 } } }
            ]
        }
    },
    {
        name: "Tom Yam",
        description: "A hot and sour soup with shrimp, flavored with lemongrass, kaffir lime leaves, galangal, chili, and lime juice.",
        lore: "Tom Yam is widely regarded as Thailand’s signature soup, embodying the vibrant and balanced flavors of Thai cuisine. Its aromatic herbs and fiery taste reflect the tropical climate and traditional medicinal uses of its ingredients.",
        countries: {
            create: [
                { country: { connect: { id: 9 } } } // Thailand
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 3 } } }
            ]
        }
    },
    {
        name: "Adobo",
        description: "Meat simmered in vinegar, soy sauce, garlic, bay leaves, and peppercorns.",
        lore: "Adobo is often seen as the unofficial national dish of the Philippines, born from native cooking techniques blended with Spanish colonial influences. The use of vinegar as a preservative highlights resourcefulness in the tropical climate and the melding of cultures across centuries.",
        countries: {
            create: [
                { country: { connect: { id: 7 } } } // Philippines
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 9 } } }
            ]
        }
    },
    {
        name: "Fish Amok",
        description: "Steamed curry fish mousse cooked in banana leaves with coconut milk and herbs.",
        lore: "Fish Amok is a treasured Khmer dish that reflects Cambodia’s rich agricultural history and influences from the Khmer Empire. The use of banana leaves for steaming and prahok ties the dish deeply to local traditions and flavors.",
        countries: {
            create: [
                { country: { connect: { id: 2 } } } // Cambodia
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 6 } } }
            ]
        }
    },
    {
        name: "Mi Quang",
        description: "Turmeric-yellow noodles with pork, shrimp, herbs, peanuts, and a small amount of broth.",
        lore: "Mi Quang originates from Central Vietnam’s Quang Nam province, a historical trading port that introduced diverse culinary influences. The dish’s vibrant color and texture represent the region’s cultural crossroads and resourcefulness.",
        countries: {
            create: [
                { country: { connect: { id: 11 } } } // Vietnam
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 1 } } }
            ]
        }
    },
    {
        name: "Khao Soi",
        description: "Coconut curry noodle soup featuring both boiled and crispy egg noodles.",
        lore: "Khao Soi is a northern Thai dish with Burmese, Chinese, and Muslim influences, showing the historical trade and migration routes through the region. It is a comfort food symbolizing the diversity and shared culinary heritage of northern Thailand.",
        countries: {
            create: [
                { country: { connect: { id: 9 } } }, // Thailand
                { country: { connect: { id: 4 } } }  // Laos
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 1 } } },
                { category: { connect: { id: 3 } } },
                { category: { connect: { id: 6 } } }
            ]
        }
    },
    {
        name: "Thai Red Curry Chicken Skewers",
        description: "Grilled chicken marinated in red curry paste, served with peanut dipping sauce.",
        lore: "These skewers showcase Thailand’s mastery of balancing spicy, sweet, and savory flavors in portable street food form, rooted in traditional grilling methods practiced in local markets.",
        countries: {
            create: [
                { country: { connect: { id: 9 } } } // Thailand
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 4 } } },
                { category: { connect: { id: 6 } } }
            ]
        }
    },
    {
        name: "Chilli Lime Barbecue Prawn Skewers",
        description: "Grilled prawns with a spicy, citrusy marinade, popular as street food.",
        lore: "This dish highlights the importance of fresh seafood in Southeast Asian coastal communities and the influence of vibrant flavors like chili and lime that characterize regional street food culture.",
        countries: {
            create: [
                { country: { connect: { id: 9 } } } // Thailand
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 4 } } },
                { category: { connect: { id: 7 } } }
            ]
        }
    },
    {
        name: "Filipino Lamb Skewers",
        description: "Grilled lamb cubes marinated in sweet, savory, tangy, and spicy sauces.",
        lore: "Lamb skewers in the Philippines reflect the country’s fusion of indigenous, Spanish, and Asian culinary traditions, with marination techniques that enhance flavor and tenderness symbolizing festive and communal eating.",
        countries: {
            create: [
                { country: { connect: { id: 7 } } } // Philippines
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 4 } } },
                { category: { connect: { id: 9 } } },
                { category: { connect: { id: 7 } } }
            ]
        }
    },
    {
        name: "Pancit",
        description: "Stir-fried noodles with meat, vegetables, and soy sauce.",
        lore: "Pancit was introduced by Chinese immigrants to the Philippines, becoming a staple for celebrations and daily meals. The noodles symbolize long life and good fortune, making it an auspicious dish at gatherings.",
        countries: {
            create: [
                { country: { connect: { id: 7 } } } // Philippines
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 1 } } }
            ]
        }
    },
    {
        name: "Som Tam (Papaya Salad)",
        description: "A spicy, sour salad made from shredded green papaya, chili, lime, fish sauce, and peanuts.",
        lore: "Som Tam is a northeastern Thai (Isan) specialty that illustrates the community’s use of local fresh produce and their preference for bold, tangy flavor profiles. It’s a festive street food bringing people together over shared bites.",
        countries: {
            create: [
                { country: { connect: { id: 9 } } } // Thailand
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 5 } } }
            ]
        }
    },
    {
        name: "Baozi",
        description: "Steamed filled buns with various fillings like pork or vegetables.",
        lore: "Though originating in China, Baozi became widely adopted and localized across Southeast Asia, especially in Chinatown communities. It represents cultural migration, adaptability, and shared culinary heritage.",
        countries: {
            create: [
                { country: { connect: { id: 8 } } }, // Singapore
                { country: { connect: { id: 5 } } }  // Malaysia
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 8 } } },
                { category: { connect: { id: 7 } } }
            ]
        }
    },
    {
        name: "Tonka",
        description: "Breaded, deep-fried pork cutlet.",
        lore: "Tonka reflects influences from Japanese cuisine that spread throughout Southeast Asia, particularly in urban areas, showcasing fusion in modern street food culture.",
        countries: {
            create: [
                { country: { connect: { id: 9 } } }, // Thailand
                { country: { connect: { id: 8 } } }  // Singapore
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 9 } } },
                { category: { connect: { id: 4 } } },
                { category: { connect: { id: 7 } } }
            ]
        }
    },
    {
        name: "Nasi Lemak",
        description: "Fragrant rice cooked in coconut milk served with anchovies, peanuts, boiled egg, cucumber, and spicy sambal sauce.",
        lore: "Nasi Lemak is Malaysia’s national dish and symbolizes Malay identity, combining humble ingredients into a fragrant, balanced meal. Traditionally eaten for breakfast, it has become a beloved dish across the region representing comfort and heritage.",
        countries: {
            create: [
                { country: { connect: { id: 5 } } } // Malaysia
            ]
        },
        category: {
            create: [
                { category: { connect: { id: 2 } } }
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
            const { countries, category, ...rest } = product

            await prisma.productsOnCountries.deleteMany({
                where: { productId: existingProduct.id }
            })

            await prisma.product.update({
                where: { id: existingProduct.id },
                data: {
                    ...rest,
                    countries: {
                        create: countries.create
                    },
                    category: {
                        create: category.create
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