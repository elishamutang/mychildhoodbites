/*
  Warnings:

  - Added the required column `citizenName` to the `Country` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Country" ADD COLUMN     "citizenName" TEXT NOT NULL;
