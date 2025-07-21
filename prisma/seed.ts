import { PrismaClient } from "../generated/prisma";
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function runSeeds() {
    const seedDir = path.join(__dirname, 'seeds')
    const seedFiles = fs.readdirSync(seedDir).filter(f => f.endsWith('.seed.ts'))

    for (const file of seedFiles) {
        const { default: main } = require(path.join(seedDir, file))
        await main(prisma)
    }
}

runSeeds()
    .catch(console.error)
    .finally(() => prisma.$disconnect())