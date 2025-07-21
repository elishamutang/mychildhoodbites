import { PrismaClient } from "../../generated/prisma";
import countries from '../../restcountries.json'

export default async function main(prisma: PrismaClient) {
    // Seed country
    for (const country of countries) {
        await prisma.country.create({
            data: {
                name: country["name"]["common"],
                countryCode: country["cca3"],
                flag: country["flags"]["svg"],
                region: country["region"]
            }
        })
    }
}