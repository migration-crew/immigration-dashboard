"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
  if (!isLoaded) {
    return
  }

  if (!isSignedIn) {
    console.log("Redirecting to sign in page");
    router.push("/sign-in");
  } else {
    console.log("User is signed in");
    router.push("/dashboard");
  }
}, [isLoaded, isSignedIn, router]);


if (!isLoaded) {
  return <div>Loading...</div>;
}

  return <>{children}</>;
};

export default ProtectedRoute;
