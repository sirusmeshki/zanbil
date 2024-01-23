import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Zanbil | Sign In',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
