import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Solon Dashboard',
  description: 'Minimal Solon MVP'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  )
}
