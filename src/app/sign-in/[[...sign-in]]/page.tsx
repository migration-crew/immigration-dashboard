'use client'

import * as React from 'react'
import { useSignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { BannerImage } from '../_components/BannerImage'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  // const { isLoaded, signIn, setActive } = useSignIn()
  // const [email, setEmail] = React.useState('')
  // const [password, setPassword] = React.useState('')
  // const router = useRouter()

  // // Handle the submission of the sign-in form
  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault()

  //   if (!isLoaded) return

  //   // Start the sign-in process using the email and password provided
  //   try {
  //     const signInAttempt = await signIn.create({
  //       identifier: email,
  //       password,
  //     })

  //     // If sign-in process is complete, set the created session as active
  //     // and redirect the user
  //     if (signInAttempt.status === 'complete') {
  //       await setActive({ session: signInAttempt.createdSessionId })
  //       router.push('/')
  //     } else {
  //       // If the status is not complete, check why. User may need to
  //       // complete further steps.
  //       console.error(JSON.stringify(signInAttempt, null, 2))
  //     }
  //   } catch (err: any) {
  //     // See https://clerk.com/docs/custom-flows/error-handling
  //     // for more info on error handling
  //     console.error(JSON.stringify(err, null, 2))
  //   }
  // }

  // Display a form to capture the user's email and password
  return (
    <>
      <div className="flex h-screen w-screen">
        <div className="w-1/2 h-full">
          <BannerImage />
        </div>

        <div className="w-1/2 h-full flex items-center justify-center bg-white">
          <SignIn />
        </div>
      </div>
    </>
  )
}