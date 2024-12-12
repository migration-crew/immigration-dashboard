import type { Metadata } from "next";
import "./globals.css";

import AppSidebar from "@/components/common/Sidebar/AppSidebar";
import TopNavbar from "@/components/common/TopNavbar/TopNavbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Poppins } from "next/font/google";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import ProtectedRoute from "./protectedRoute/ProtectedRoute";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${poppins.className} antialiased min-h-screen flex`}>
          <ProtectedRoute>
            {/* Signed In */}
            <SignedIn>
              {modal}
              <SidebarProvider>
                <AppSidebar />
                <main className="flex flex-col flex-1">
                  <TopNavbar />
                  {children}
                </main>
              </SidebarProvider>
            </SignedIn>
            {/* Signed Out */}
            <SignedOut>
              {children}
            </SignedOut>
          </ProtectedRoute>
        </body>
      </html>
    </ClerkProvider>
  );
}
