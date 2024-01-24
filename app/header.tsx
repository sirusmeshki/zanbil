import { auth } from '@/auth'

import { ModeToggle } from '@/components/mode-toggle'
import HeaderUser from '@/components/profile/header-user'

const Header = async () => {
    const session = await auth()

    return (
        <header className='flex w-full items-center justify-between border-b p-4'>
            <HeaderUser user={session?.user} />
            <ModeToggle />
        </header>
    )
}

export default Header
