'use client'

import { useState, useTransition } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SignUpSchema } from '@/schemas'
import { signUp } from '@/actions/sign-up'
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

const SignUpForm = () => {
    const [error, setError] = useState<string | undefined>('')
    const [success, setSuccess] = useState<string | undefined>('')
    const [isPending, startTransition] = useTransition()

    const form = useForm<z.infer<typeof SignUpSchema>>({
        resolver: zodResolver(SignUpSchema),
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    function onSubmit(values: z.infer<typeof SignUpSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        setError('')
        setSuccess('')
        startTransition(() => {
            signUp(values).then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
        startTransition(() => {
            signUp(values)
        })
    }

    return (
        <CardWrapper
            title='Create your account'
            subTitle="Let's get started with your shopping"
            backButtonLabel='Already have an account?'
            backButtonTitle='Sign In'
            backButtonUrl='/auth/sign-in'>
            <Form {...form}>
                <form
                    className='space-y-6'
                    onSubmit={form.handleSubmit(onSubmit)}>
                    {/* Name Input */}
                    <FormField
                        control={form.control}
                        name='name'
                        disabled={isPending}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} placeholder='John Doe' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

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

                    {/* Password Input*/}
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

                    <Button
                        className='w-full'
                        disabled={isPending}
                        type='submit'>
                        Submit
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default SignUpForm
