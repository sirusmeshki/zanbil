import { auth } from '@/auth'

const DashboardPage = async () => {
    const session = await auth()

    if (session?.user?.role === 'ADMIN') return <h1>Admin Dashboard</h1>
    if (session?.user?.role === 'USER') return <h1>User Dashboard</h1>

    return <h2>hey</h2>
}

export default DashboardPage
