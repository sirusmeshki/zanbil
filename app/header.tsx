import Link from 'next/link'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'

const Header = () => {
    return (
        <header className='flex w-full items-center justify-between border-b p-4'>
            <div className='space-x-2'>
                <Link href={'/auth/sign-in'}>
                    <Button variant={'default'}>Sign In</Button>
                </Link>
                <Link href={'/auth/sign-up'}>
                    <Button variant={'ghost'}>Sign Up</Button>
                </Link>
            </div>
            <ModeToggle />
        </header>
    )
}

export default Header
