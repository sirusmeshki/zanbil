'use server'

import * as z from 'zod'
import { AuthError } from 'next-auth'

import { signIn as login } from '@/auth'
import { SignInSchema } from '@/schemas'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const signIn = async (values: z.infer<typeof SignInSchema>) => {
    const validatedFields = SignInSchema.safeParse(values)

    // Check if values types are safe
    if (!validatedFields.success) {
        return { error: 'Invalid fields!' }
    }

    const { email, password } = validatedFields.data

    try {
        await login('credentials', {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })

        return { success: 'You LoggedIn' }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Your email and/or password do not match.' }
                default:
                    return { error: 'Something went wrong' }
            }
        }

        throw error
    }
}
