import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'

const PJS = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Zanbil',
    description: 'E-Commerce | Admin Dashboard',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={PJS.className}>{children}</body>
        </html>
    )
}
