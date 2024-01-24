/**
 * An array of routes that are need to be Logged In
 * And then redirect them to /dashboard
 * @type {string[]}
 */
export const protectedRoute = '/dashboard'

/**
 * an array of routes that we cant access when we logged in
 */
export const authRoutes = ['/auth/sign-in', '/auth/sign-up']

export const apiAuthPrefix = '/api/auth'

export const DEFAULT_LOGIN_REDIRECT = '/dashboard'
