import { HeaderProps } from '@/components/auth/models'

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
    return (
        <header>
            <h2 className='text-center text-3xl font-bold xs:text-4xl'>
                {title}
            </h2>
            <p className='pt-2 text-center text-xs xs:text-sm'>{subTitle}</p>
        </header>
    )
}

export default Header
