import Link from 'next/link'

import { CardWrapperProps } from '@/components/auth/models'
import { Button } from '@/components/ui/button'
import Header from '@/components/auth/card/header'
import Social from '@/components/auth/card/social'
import Seperator from '@/components/auth/card/seperator'

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
            {/* Google, Github providers links */}
            <Social />
            <Seperator label='or' />

            {/* Form */}
            <div className='w-full'>{children}</div>

            {/* Redirect link to sign-in or sign-up page */}
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
