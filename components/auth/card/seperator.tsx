import { Badge } from '@/components/ui/badge'
import { SeperatorProps } from '@/components/auth/models'

const Seperator: React.FC<SeperatorProps> = ({ label }) => {
    return (
        <div className='relative flex w-full items-center justify-center'>
            <div className='h-[1px] w-full bg-neutral-200 dark:bg-neutral-800' />
            {label && (
                <Badge variant={'secondary'} className='absolute'>
                    {label}
                </Badge>
            )}
        </div>
    )
}

export default Seperator
