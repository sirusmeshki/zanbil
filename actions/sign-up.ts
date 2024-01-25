'use server'

import * as z from 'zod'
import bcrypt from 'bcryptjs'

import { db } from '@/lib/db'
import { SignUpSchema } from '@/schemas'
import { getUserByEmail } from '@/data/user'

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
    const validatedFields = SignUpSchema.safeParse(values)

    // Check if values types are safe
    if (!validatedFields.success) {
        return { error: 'Invalid fields!' }
    }

    const { email, password, name } = validatedFields.data
    // Hash user password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Check if user exist in database
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
        return { error: 'Email already in use!' }
    }

    // if everything is ok create a user in database
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    })

    return { success: 'User Created!' }
}
