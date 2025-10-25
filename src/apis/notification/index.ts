// Export notification API
export * from './notification.api'
export * from './notification.entities'
export * from './notification.enum'
export * from './notification.interface'

// Export as notificationApi object
import * as notificationApiMethods from './notification.api'
export const notificationApi = notificationApiMethods
