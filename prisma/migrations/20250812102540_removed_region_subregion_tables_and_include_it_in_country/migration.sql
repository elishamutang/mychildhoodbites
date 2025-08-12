/*
  Warnings:

  - You are about to drop the column `subRegionId` on the `Country` table. All the data in the column will be lost.
  - You are about to drop the column `subregionId` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubRegion` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `region` to the `Country` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subregion` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Country" DROP CONSTRAINT "Country_subRegionId_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_subregionId_fkey";

-- DropForeignKey
ALTER TABLE "SubRegion" DROP CONSTRAINT "SubRegion_regionId_fkey";

-- AlterTable
ALTER TABLE "Country" DROP COLUMN "subRegionId",
ADD COLUMN     "region" TEXT NOT NULL,
ADD COLUMN     "subregion" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "subregionId";

-- DropTable
DROP TABLE "Region";

-- DropTable
DROP TABLE "SubRegion";
