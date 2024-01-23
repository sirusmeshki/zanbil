import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Zanbil | Sign Up',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
