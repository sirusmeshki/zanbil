'use server'

import { signIn as login } from '@/auth'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'
import { SignInSchema } from '@/schemas'
import * as z from 'zod'
import { AuthError } from 'next-auth'

export const signIn = async (values: z.infer<typeof SignInSchema>) => {
    const validatedFields = SignInSchema.safeParse(values)

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

        return { success: 'You ' }
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: 'Invalid credintials' }
                default:
                    return { error: 'Something went wrong' }
            }
        }

        throw error
    }
}
