import UserButton from '@/layout/header/_components/user-button'
import AuthButtons from '@/layout/header/_components/auth-buttons'

const User = ({ user }: { user: any }) => {
    return (
        <>
            {user ? (
                <UserButton avatar='' name={user?.name} />
            ) : (
                <AuthButtons />
            )}
        </>
    )
}

export default User
