/*
  Warnings:

  - You are about to drop the column `citizenName` on the `Country` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Country" DROP COLUMN "citizenName",
ADD COLUMN     "countryCapital" TEXT,
ADD COLUMN     "countryCode" TEXT,
ADD COLUMN     "flag" VARCHAR(255);
