'use client'

import { useState, useTransition } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SignInSchema } from '@/schemas'
import { signIn } from '@/actions/sign-in'
import CardWrapper from '@/components/auth/card/card-wrapper'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AlertSuccess from '@/components/auth/alert/alert-success'
import AlertError from '@/components/auth/alert/alert-error'

const SignInForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof SignInSchema>>({
        resolver: zodResolver(SignInSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    function onSubmit(values: z.infer<typeof SignInSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setError('')
        setSuccess('')
        startTransition(() => {
            signIn(values).then((data) => {
                if (data?.error) {
                    form.reset()
                    setError(data.error)
                }

                if (data?.success) {
                    setSuccess(data.success)
                }
            })
        })
    }

    return (
        <CardWrapper
            title='Welcome Back'
            subTitle='Login to your account below'
            backButtonLabel='Dont have an account?'
            backButtonTitle='Sign Up'
            backButtonUrl='/auth/sign-up'>
            <Form {...form}>
                <form
                    className='space-y-6'
                    onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Email Input */}
                    <FormField
                        control={form.control}
                        name='email'
                        disabled={isPending}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder='example@mail.com'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Password Input */}
                    <FormField
                        control={form.control}
                        name='password'
                        disabled={isPending}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='******' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {/* Alert */}
                    <AlertSuccess description={success} />
                    <AlertError description={error} />

                    {/* Submit Button */}
                    <Button
                        className='w-full'
                        disabled={isPending}
                        type='submit'>
                        Log In
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default SignInForm
