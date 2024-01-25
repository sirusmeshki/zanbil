import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Social = () => {
    return (
        <Button className='w-full' variant='outline'>
            <Image
                src='/google.svg'
                alt='google logo'
                width={18}
                height={18}
                className='mr-2'
            />
            Login with Google
        </Button>
    )
}

export default Social
