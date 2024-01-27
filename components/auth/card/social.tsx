import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { googleSignIn } from '@/actions/google'

const Social = () => {
    return (
        <Button
            className='w-full'
            variant='outline'
            onClick={() => googleSignIn()}>
            <Image
                className='mr-2'
                src='/google.svg'
                alt='google logo'
                width={18}
                height={18}
            />
            Login with Google
        </Button>
    )
}

export default Social
