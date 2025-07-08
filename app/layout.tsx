import './globals.css'
import { ClerkProvider, SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ReactNode } from 'react'
import { type Metadata } from 'next'
// Jeśli fonty Geist nie istnieją, usuń te importy lub zamień na inne dostępne fonty Google
// import { Geist, Geist_Mono } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Solon Dashboard',
  description: 'Minimal Solon MVP',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}