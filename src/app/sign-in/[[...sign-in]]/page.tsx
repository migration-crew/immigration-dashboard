'use client'

import * as React from 'react'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { BannerImage } from '../_components/BannerImage'
import { LogoImage } from '@/components/common/Logo'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/upImmigrationButton"
import { Subtitle } from '@/components/common/text/Subtitle'
import { ParagraphRegular } from '@/components/common/text/ParagraphRegular'

export default function Page() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const router = useRouter()

  const formSchema = z.object({
    email: z.string().min(2, {
      message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(2, {
      message: "Password must be at least 2 characters.",
    }),
  })

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);

    if (!isLoaded) return

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: values.email,
        password: values.password,
      })

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.push('/')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2))
    }
  }

  // Display a form to capture the user's email and password
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-1/2 h-full">
          <BannerImage />
        </div>

        <div className="w-1/2 h-full flex flex-col gap-16 items-center justify-center bg-white">
          <LogoImage width={215} height={102} />

          <div className='w-[500px] flex flex-col gap-9'>
            <div>
              <Subtitle>Login to Account</Subtitle>
              <ParagraphRegular className='text-secondary-medium-gray'>Please enter your email and password to continue</ParagraphRegular>
            </div>

            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col items-center">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className='w-[500px]'>
                        <FormLabel className='text-secondary-medium-gray'>Email address:</FormLabel>
                        <FormControl>
                          <Input required type="email" className='bg-secondary-light-gray' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem className='w-[500px]'>
                        <FormLabel className='text-secondary-medium-gray'>Password:</FormLabel>
                        <FormControl>
                          <Input required type="password" className='bg-secondary-light-gray' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className='w-[191px] h-[50px]'>Log In</Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}