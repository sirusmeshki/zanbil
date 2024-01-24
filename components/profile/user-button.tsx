import { signOut } from '@/auth'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '../ui/button'

const UserButton = ({ name, avatar }: { name: string; avatar: string }) => {
    return (
        <DropdownMenu>
            {/* Avatar Button */}
            <DropdownMenuTrigger asChild className='cursor-pointer'>
                <Avatar>
                    <AvatarImage src={avatar} />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            {/* Content */}
            <DropdownMenuContent>
                <DropdownMenuLabel>{name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <form
                        action={async () => {
                            'use server'
                            await signOut()
                        }}>
                        <Button
                            variant={'destructive'}
                            className='w-full'
                            type='submit'>
                            Sign Out
                        </Button>
                    </form>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserButton
