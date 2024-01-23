import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { CardWrapperProps } from '@/components/auth/models'
import Header from '@/components/auth/header'
import Social from '@/components/auth/social'
import Seperator from '@/components/auth/seperator'

const CardWrapper: React.FC<CardWrapperProps> = ({
    children,
    title,
    subTitle,
    backButtonLabel,
    backButtonTitle,
    backButtonUrl,
}) => {
    return (
        <section className='mx-auto flex h-full w-full max-w-md flex-col items-center justify-center space-y-6 px-2 py-8'>
            <Header title={title} subTitle={subTitle} />
            <Social />
            <Seperator label='or' />
            <div className='w-full'>{children}</div>
            <div className='flex items-center justify-center'>
                <p className='text-sm text-neutral-500'>{backButtonLabel}</p>
                <Link href={backButtonUrl}>
                    <Button className='p-1' variant={'link'}>
                        {backButtonTitle}
                    </Button>
                </Link>
            </div>
        </section>
    )
}

export default CardWrapper
