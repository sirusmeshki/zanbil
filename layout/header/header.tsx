import Link from 'next/link'
import { auth } from '@/auth'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import HeaderUser from '@/layout/header/components/user'

const Header = async () => {
    const session = await auth()

    return (
        <header className='flex w-full items-center justify-between border-b p-4'>
            <div className='font-regular hidden space-x-2 text-sm sm:flex'>
                <Link href='/'>
                    <Button variant={'ghost'}>Home</Button>
                </Link>
                <Link href='/about'>
                    <Button variant={'ghost'}>About</Button>
                </Link>
                <Link href='/dashboard'>
                    <Button variant={'ghost'}>Dashboard</Button>
                </Link>
            </div>
            <div className='flex w-full justify-between space-x-1 sm:w-auto'>
                <ModeToggle />
                <HeaderUser user={session?.user} />
            </div>
        </header>
    )
}

export default Header
