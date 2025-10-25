// Export user API
export * from './user.api'
export * from './user.entities'
export * from './user.enum'
export * from './user.interface'

// Export as userApi object
import * as userApiMethods from './user.api'
export const userApi = userApiMethods
