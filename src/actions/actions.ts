"use server"

import { z } from 'zod'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { APIError } from 'better-auth/api'
import { SignInData, SignInResult, SignUpData } from '@/lib/types'
import { redirect } from 'next/navigation'

const Product = z.object({
    product: z.string()
})

const SignInSchema = z.object({
    email: z.email({
        error: 'Invalid email address.'
    }).nonempty(),
    password: z.string().nonempty({ error: 'Password must not be empty.' }).min(8, { error: 'Password must be at least 8 characters.' })
})

const SignUpSchema = SignInSchema.extend({
    name: z.string().nonempty({ error: 'Name must not be empty' }),
    country: z.number().nonnegative()
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

// Handle user sign in.
export async function signIn(initialState: any, formData: FormData): Promise<SignInResult> {

    const rawData: SignInData = {
        email: formData.get('email') as string,
        password: formData.get('password') as string
    }

    const validated = SignInSchema.safeParse(rawData)

    if (!validated.success) {
        return {
            success: false,
            message: 'Please fix the errors in the form.',
            errors: z.flattenError(validated.error),
            inputs: { ...rawData, password: '' }
        }
    }

    try {
        const response = await auth.api.signInEmail({
            body: {
                email: validated.data.email,
                password: validated.data.password,
                callbackURL: 'http://localhost:3000/dashboard'
            },
            headers: await headers(),
            asResponse: true
        })

        if (!response.ok) {
            const errorMsg = await response.json()
            return {
                success: false,
                message: errorMsg.message,
                statusCode: response.status
            }
        }

        console.log("User signed in: ", validated.data.email)
    } catch (error) {
        if (error instanceof APIError) {
            return {
                success: false,
                message: error.message,
                statusCode: error.statusCode
            }
        }

        return {
            success: false,
            message: 'Unexpected server error. Please try again.',
            inputs: { ...rawData, password: '' }
        }
    }

    redirect('/dashboard')
}


// Handle user sign up
export async function signUp(initialState: any, formData: FormData) {

    const rawData: SignUpData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        country: parseInt(formData.get('country') as string)
    }

    const validated = SignUpSchema.safeParse(rawData)

    if (!validated.success) {
        return {
            success: false,
            message: 'Please fix the errors in the form.',
            errors: z.flattenError(validated.error),
            inputs: { ...rawData, password: '' }
        }
    }

    try {
        await auth.api.signUpEmail({
            body: {
                name: validated.data.name,
                email: validated.data.email,
                password: validated.data.password,
                countryId: validated.data.country,
                callbackURL: 'http://localhost:3000/dashboard'
            },
            headers: await headers()
        })

        console.log("User signed up: ", validated.data.email)
    } catch (error) {
        if (error instanceof APIError) {
            return {
                success: false,
                message: error.message,
                statusCode: error.statusCode
            }
        }

        return {
            success: false,
            message: 'Unexpected server error. Please try again.',
            inputs: { ...rawData, password: '' }
        }
    }

    redirect('/dashboard')
}