/*
  Warnings:

  - Made the column `countryCapital` on table `Country` required. This step will fail if there are existing NULL values in that column.
  - Made the column `countryCode` on table `Country` required. This step will fail if there are existing NULL values in that column.
  - Made the column `flag` on table `Country` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Country" ALTER COLUMN "countryCapital" SET NOT NULL,
ALTER COLUMN "countryCode" SET NOT NULL,
ALTER COLUMN "flag" SET NOT NULL;
