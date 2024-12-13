'use client'

import { RedirectToSignIn, useUser } from "@clerk/nextjs";
import { redirect, useRouter } from 'next/navigation'
import React, { use } from "react";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    console.log("Redirecting to sign in page");
    router.push("/sign-in");
  } else {
    console.log("User is signed in");
    router.push("/dashboard");
  }

  return <>{children}</>;
};

export default ProtectedRoute;
