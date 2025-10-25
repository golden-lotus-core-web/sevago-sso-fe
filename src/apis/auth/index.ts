// Export auth API
export * from './auth.api'
export * from './auth.enum'
export * from './auth.interface'

// Export as authApi object
import * as authApiMethods from './auth.api'
export const authApi = authApiMethods
