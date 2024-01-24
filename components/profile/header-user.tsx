import Link from 'next/link'

import UserButton from '@/components/profile/user-button'
import { Button } from '@/components/ui/button'

const HeaderUser = ({ user }: { user: any }) => {
    return (
        <>
            {user ? (
                <UserButton avatar='' name={user?.name} />
            ) : (
                <div className='space-x-2'>
                    <Link href={'/auth/sign-in'}>
                        <Button variant={'default'}>Sign In</Button>
                    </Link>
                    <Link href={'/auth/sign-up'}>
                        <Button variant={'ghost'}>Sign Up</Button>
                    </Link>
                </div>
            )}
        </>
    )
}

export default HeaderUser
