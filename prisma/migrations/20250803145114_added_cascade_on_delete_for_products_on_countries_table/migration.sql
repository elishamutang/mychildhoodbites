-- DropForeignKey
ALTER TABLE "ProductsOnCountries" DROP CONSTRAINT "ProductsOnCountries_countryId_fkey";

-- AddForeignKey
ALTER TABLE "ProductsOnCountries" ADD CONSTRAINT "ProductsOnCountries_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE CASCADE ON UPDATE CASCADE;
