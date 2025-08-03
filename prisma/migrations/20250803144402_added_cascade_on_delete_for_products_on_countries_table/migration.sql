-- DropForeignKey
ALTER TABLE "ProductsOnCountries" DROP CONSTRAINT "ProductsOnCountries_productId_fkey";

-- AddForeignKey
ALTER TABLE "ProductsOnCountries" ADD CONSTRAINT "ProductsOnCountries_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
