import UserButton from '@/layout/header/components/user-button'
import AuthButtons from '@/layout/header/components/auth-buttons'

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
