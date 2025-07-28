/*
  Warnings:

  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "lore" VARCHAR(255),
ALTER COLUMN "description" SET NOT NULL;
