import NextAuth from 'next-auth'
import authConfig from '@/auth.config'

import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    protectedRoute,
} from '@/routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
    const isAuthRoute = authRoutes.includes(nextUrl.pathname)
    const isProtectedRoute = nextUrl.pathname.includes(protectedRoute)

    if (isApiAuthRoute) {
        return null
    }

    if (isAuthRoute && !isProtectedRoute) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if (!isLoggedIn && isProtectedRoute) {
        return Response.redirect(new URL('/auth/sign-in', nextUrl))
    }

    return null
})

// Optionally, don't invoke Middleware on some paths
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
// Clerk Regular Expression Matcher https://clerk.com/docs/references/nextjs/auth-middleware
// This is going to invoke auth function on this routes
