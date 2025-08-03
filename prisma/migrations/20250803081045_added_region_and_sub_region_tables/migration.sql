/*
  Warnings:

  - You are about to drop the column `region` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `countryId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `whereToBuy` on the `Product` table. All the data in the column will be lost.
  - Added the required column `subRegionId` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subregionId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_countryId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "region",
ADD COLUMN     "subRegionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "countryId",
DROP COLUMN "whereToBuy",
ADD COLUMN     "subregionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubRegion" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "regionId" INTEGER NOT NULL,

    CONSTRAINT "SubRegion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductsOnCountries" (
    "productId" INTEGER NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "ProductsOnCountries_pkey" PRIMARY KEY ("productId","countryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Region_name_key" ON "Region"("name");

-- CreateIndex
CREATE UNIQUE INDEX "SubRegion_name_key" ON "SubRegion"("name");

-- AddForeignKey
ALTER TABLE "SubRegion" ADD CONSTRAINT "SubRegion_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Country" ADD CONSTRAINT "Country_subRegionId_fkey" FOREIGN KEY ("subRegionId") REFERENCES "SubRegion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_subregionId_fkey" FOREIGN KEY ("subregionId") REFERENCES "SubRegion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnCountries" ADD CONSTRAINT "ProductsOnCountries_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductsOnCountries" ADD CONSTRAINT "ProductsOnCountries_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
