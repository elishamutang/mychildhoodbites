import { PrismaClient } from "../../generated/prisma";
import { randEmail, randFirstName } from "@ngneat/falso";

const randNum = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default async function main(prisma: PrismaClient) {
    // Seed users
    for (let i = 1; i <= 10; i++) {
        await prisma.user.create({
            data: {
                email: randEmail(),
                name: randFirstName(),
                countryId: randNum(1, 250),
            }
        })
    }
}