'use client'

import { useState, useTransition } from 'react'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { SignUpSchema } from '@/schemas'
import CardWrapper from '@/components/auth/card-wrapper'
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
import AlertSuccess from '@/components/auth/alert-success'
import AlertError from '@/components/auth/alert-error'
import { signUp } from '@/actions/sign-up'

const SignUpForm = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
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
        setError('')
        setSuccess('')
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        startTransition(() => {
            signUp(values).then((data) => {
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
            title='Create your account'
            subTitle="Let's get started with your shopping"
            backButtonLabel='Already have an account?'
            backButtonTitle='Sign In'
            backButtonUrl='/auth/sign-in'>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className='space-y-6'>
                    {/* Name Input */}
                    <FormField
                        control={form.control}
                        name='name'
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
                    {success && <AlertSuccess description='You logged in' />}
                    {error && <AlertError description='an error happened' />}

                    {/* Submit Button */}
                    <Button className='w-full' type='submit'>
                        Submit
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default SignUpForm
