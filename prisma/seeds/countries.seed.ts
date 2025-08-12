import { PrismaClient } from "../../generated/prisma";
import countries from '../../restcountries.json';

export default async function main(prisma: PrismaClient) {
    // Regions
    // Filters unique, non-null or empty region fields.
    // const regionNames = Array.from(new Set(countries.map(country => country.region).filter(region => region)))

    // // Insert regions in Region table.
    // for (const regionName of regionNames) {
    //     await prisma.region.upsert({
    //         where: { name: regionName },
    //         update: {},
    //         create: { name: regionName }
    //     })
    // }

    // Sub regions
    // Filters unique, non-null or empty values.
    // const subregions = Array.from(new Set(countries.map(country => `${country.region},${country.subregion}`).filter(subregion => subregion)))

    // for (const subregion of subregions) {
    //     const [regionName, subregionName] = subregion.split(',')

    //     // Find region ID by name
    //     const region = await prisma.region.findUnique({
    //         where: { name: regionName }
    //     })

    //     if (region && subregionName) {
    //         // Seed SubRegion table and relate regionId
    //         await prisma.subRegion.upsert({
    //             where: { name: subregionName },
    //             update: {},
    //             create: {
    //                 name: subregionName,
    //                 regionId: region?.id
    //             }
    //         })
    //     }
    // }

    // Countries
    for (const country of countries) {
        await prisma.country.upsert({
            where: { name: country.name.common },
            update: {},
            create: {
                name: country.name.common,
                countryCode: country.cca3,
                flag: country.flags.svg,
                subregion: country.subregion,
                region: country.region
            }
        })
    }
}