"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();
  const pathname = usePathname();

  const protectedRoutes = [
    "/dashboard",
    "/documents",
    "/payments",
    "/applications",
    "/appointment",
    "/calendar",
    "/inbox",
    "/profile",
    "/success",
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    if (!isSignedIn) {
      console.log("Redirecting to sign in page");
      router.push("/sign-in");
    } else {
      console.log("User is signed in");

      if (protectedRoutes.includes(pathname)) {
          console.log("User is on a protected route");
        } else {
          console.log("undefined route");
          router.push("/dashboard");
        }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
