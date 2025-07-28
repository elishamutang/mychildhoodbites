import { readdir } from "fs/promises";
import path from "path";

export default async function getProductImg(name: string) {
    // Locate image and load it.
    let imgSrc;
    try {
        const filePath = path.resolve("./public", "images", "products");
        const files = await readdir(filePath);

        for (const file of files) {
            const fileName = file.split(".");
            const productName = fileName[0].split("-").join("").toLowerCase();

            const existingProductName = name
                .replace(/[^a-zA-Z0-9]/g, "")
                .split("")
                .join("")
                .toLowerCase();

            if (productName === existingProductName) {
                imgSrc = path.resolve(filePath, file).replace(/^.*?(\/images)/, "$1");
                return imgSrc
            }
        }
    } catch (err) {
        console.error(err);
        return null;
    }
}