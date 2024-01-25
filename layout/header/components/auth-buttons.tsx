import Link from 'next/link'
import { Button } from '@/components/ui/button'

const AuthButtons = () => {
    return (
        <div className='space-x-2'>
            <Link href={'/auth/sign-in'}>
                <Button variant={'default'}>Sign In</Button>
            </Link>

            <Link href={'/auth/sign-up'}>
                <Button variant={'ghost'}>Sign Up</Button>
            </Link>
        </div>
    )
}

export default AuthButtons
