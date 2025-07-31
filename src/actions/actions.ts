"use server"

import { z } from 'zod'

const Product = z.object({
    product: z.string()
})

export async function getProduct(initialState: any, formData: FormData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = Product.safeParse({ product: formData.get('product') })

            if (!result.success) {
                reject(result.error)
            } else {
                console.log(result.data.product)
                resolve(result)
            }
        }, 2000)
    })
}