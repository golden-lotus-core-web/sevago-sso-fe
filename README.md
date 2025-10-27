# Sevago SSO Frontend Library

A comprehensive Single Sign-On (SSO) frontend library built with React, TypeScript, and Material-UI. This library provides authentication components, utilities, and hooks for building SSO-enabled applications.

## Features

- 🔐 Complete authentication system with login, logout, and token management
- 🎨 Material-UI components with custom styling and theming
- 📱 Responsive design with mobile support
- 🔄 Redux state management with persistence
- 🌐 API integration with axios
- 🔔 Real-time notifications with Firebase
- 📊 Dashboard components and layouts
- 🎯 TypeScript support with full type definitions
- 🎭 Framer Motion animations
- 🔌 Socket.io integration for real-time features

## Installation

```bash
npm install sevago-sso-fe
```

## Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

```bash
npm install react@>=17 react-dom@>=17 @emotion/react@>=11 @emotion/styled@>=11 @mui/material@>=5 @mui/system@>=5 @reduxjs/toolkit@^2.9.2 react-redux@^9.2.0 react-router-dom@^7.9.4 redux-persist@^6.0.0
```

## Usage

### Basic Setup

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { 
  App, 
  store, 
  persistor,
  SnackbarProvider 
} from 'sevago-sso-fe';

function RootApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default RootApp;
```

### Using Individual Components

```tsx
import { 
  useSnackbar, 
  useApps,
  authApi,
  userApi,
  SystemMonitorScreen,
  DashboardPage,
  AuthPage
} from 'sevago-sso-fe';

function MyComponent() {
  const { showSnackbar } = useSnackbar();
  const { apps } = useApps();

  const handleLogin = async (credentials) => {
    try {
      const response = await authApi.login(credentials);
      showSnackbar({ message: 'Login successful!', type: 'success' });
    } catch (error) {
      showSnackbar({ message: 'Login failed!', type: 'error' });
    }
  };

  return (
    <div>
      <SystemMonitorScreen />
      {/* Your content */}
    </div>
  );
}
```

### Using Hooks

```tsx
import { 
  useSnackbar, 
  useApps, 
  useVersionCheck,
  useUpdateCurrentAccess,
  useActiveSidebar,
  useAllApps,
  useIsSystemMonitor,
  useSidebarState,
  useTagSelector,
  useSidebar
} from 'sevago-sso-fe';

function MyComponent() {
  const { showSnackbar } = useSnackbar();
  const { apps, loading } = useApps();
  const { updateAccess } = useUpdateCurrentAccess();
  const { isActive } = useActiveSidebar();
  const { allApps } = useAllApps();
  const { isSystemMonitor } = useIsSystemMonitor();
  const { sidebarState } = useSidebarState();
  const { selectedTags, toggleTag } = useTagSelector();
  const { sidebar } = useSidebar();
  
  // Version checking
  useVersionCheck({ interval: 5 * 60 * 1000 });

  return (
    <div>
      {loading ? 'Loading...' : apps.map(app => (
        <div key={app.id}>{app.name}</div>
      ))}
    </div>
  );
}
```

### Using API Services

```tsx
import { authApi, userApi, notificationApi, orgUnitApi } from 'sevago-sso-fe';

// Authentication
const loginResponse = await authApi.login({ email, password });
const logoutResponse = await authApi.logout({ token });

// User management
const user = await userApi.getUser(userId);
const updatedUser = await userApi.updateAccount(userData);

// Notifications
const notifications = await notificationApi.getListNotification(params);
await notificationApi.subscribeTopic({ token });

// Organization units
const orgUnits = await orgUnitApi.getOrgUnits();
```

## API Reference

### Main App Component
- `App` - Main application component with theme provider and routing

### Pages
- `AuthPage` - Authentication page
- `DashboardPage` - Main dashboard page
- `ErrorPage` - Error page
- `NotFoundPage` - 404 not found page

### Dashboard Screens
- `SystemMonitorScreen` - System monitoring dashboard screen

### Layouts
- `AuthLayout` - Authentication layout
- `DashboardLayout` - Dashboard layout
- `DefaultLayout` - Default layout

### Components

#### Core Components
- `AppGrid` - Application grid component
- `AvatarElement` - Avatar element
- `AvatarUserInfo` - User info avatar
- `AvatarUserComponent` - User avatar component
- `BellComponent` - Notification bell component
- `EmptyComponent` - Empty state component
- `LoadingComponent` - Loading component
- `LogoComponent` - Logo component
- `MotionBox` - Framer Motion box component
- `TimeAgoContentComponent` - Time ago content
- `TimeAgoComponent` - Time ago component

#### UI Elements
- `ButtonElement` - Custom button element
- `IconElement` - Icon element
- `ImageElement` - Image element
- `RadioElement` - Radio button element
- `TextFieldElement` - Text field element
- `TooltipOnClickElement` - Tooltip on click element
- `TypographyContentCaption` - Typography caption

### Hooks
- `useSnackbar()` - Snackbar notifications with SnackbarProvider
- `useApps()` - Application management
- `useActiveSidebar()` - Active sidebar state
- `useAllApps()` - All applications access
- `useIsSystemMonitor()` - System monitor check
- `useSidebarState()` - Sidebar state management
- `useTagSelector()` - Tag selection functionality
- `useUpdateCurrentAccess()` - Access control updates
- `useVersionCheck(options)` - Version checking
- `useSidebar()` - Sidebar management

### API Services
- `authApi` - Authentication operations (login, logout, refresh token, etc.)
- `userApi` - User management (get user, update account, etc.)
- `notificationApi` - Notification handling (get notifications, subscribe topics, etc.)
- `orgUnitApi` - Organization unit management

### Redux Store
- `store` - Redux store instance
- `persistor` - Redux persist instance
- `GlobalReduxState` - Global Redux state type

#### Redux Slices
- `remainingWeightSlice` - Remaining weight management
- `account` - Account management (login, logout, reset password, refresh token, subscribe topic, unsubscribe topic, change notification count, change sidebar count, update account, get account, update position org unit, update current access)
- `system` - System management (change mode, theme management)

### Router Utilities
- `renderRoutes` - Route rendering utility
- `routes` - Route definitions
- `routeConstants` - Route constants (ALLOW_USER_TYPES, BOOKING_SCREEN, DASHBOARD_SCREEN, etc.)
- `RouteType` - Route type enum

### Common Utilities

#### Constants
- `STYLE` - Style constants (padding, border radius, heights, etc.)
- `MODE` - Theme modes (light, dark, other)
- `OPACITY` - Opacity constants
- `APPS_CONSTANT` - Application constants
- `REG_EXP` - Regular expression constants
- `TYPOGRAPHY` - Typography constants

#### Utils
- `timeUtils` - Time utility functions (getTimeAgo, getDateTime, getDate, checkNowYear, getMonthRangeForYear, getDayOffsetPx, isSameDateTime, getTimeDate, isDateString)
- `stringUtils` - String utility functions
- `findCurrentAccessHelper` - Access control helper
- `otherUtils` - Other utility functions

#### Configuration
- `axiosConfig` - Axios configuration
- `firebaseConfig` - Firebase configuration
- `socketConfig` - Socket.io configuration

## Configuration

### Firebase Setup
Configure Firebase for notifications:

```tsx
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Your Firebase config
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};

initializeApp(firebaseConfig);
```

### API Configuration
Configure your API endpoints:

```tsx
import { axiosRequest } from 'sevago-sso-fe';

// Configure base URL
axiosRequest.defaults.baseURL = 'https://your-api.com';
```

### Environment Variables
Set up the following environment variables:

```env
REACT_APP_FIREBASE_VAPID_KEY=your-vapid-key
REACT_APP_API_BASE_URL=your-api-base-url
```

## Styling

The library includes comprehensive styling constants and Material-UI theme customization:

```tsx
import { STYLE, MODE, OPACITY } from 'sevago-sso-fe';

// Use style constants
const customStyle = {
  padding: STYLE.PADDING_GAP_LAYOUT,
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
  height: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
};

// Use theme modes
const theme = createTheme(MODE.light); // or MODE.dark or MODE.other

// Use opacity constants
const semiTransparent = `${MODE.light.palette.primary.main}${OPACITY[50]}`;
```

## TypeScript Support

Full TypeScript support is included with comprehensive type definitions:

```tsx
import type { 
  GlobalReduxState,
  LoginDto, 
  User, 
  Notification,
  SnackbarType,
  RouteType
} from 'sevago-sso-fe';
```

## Development

To contribute to this library:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build library: `npm run build:lib`
5. Test the build: `npm run preview`
6. Lint code: `npm run lint`

## Changelog

### Version 1.0.23
- Initial release with comprehensive SSO functionality
- Complete authentication system
- Material-UI integration with custom theming
- Redux state management with persistence
- Firebase notifications support
- Dashboard and system monitoring components
- TypeScript support throughout
- Socket.io integration for real-time features

## License

MIT

## Repository

- GitHub: https://github.com/dev1-gmail2025/sevago-sso-fe
- Issues: https://github.com/dev1-gmail2025/sevago-sso-fe/issues