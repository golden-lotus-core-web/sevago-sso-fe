# Sevago SSO Frontend Library

A comprehensive Single Sign-On (SSO) frontend library built with React, TypeScript, and Material-UI. This library provides authentication components, utilities, and hooks for building SSO-enabled applications.

## Features

- 🔐 Complete authentication system with login, logout, and token management
- 🎨 Material-UI components with custom styling
- 📱 Responsive design with mobile support
- 🔄 Redux state management with persistence
- 🌐 API integration with axios
- 🔔 Real-time notifications with Firebase
- 📊 Dashboard components and layouts
- 🎯 TypeScript support with full type definitions

## Installation

```bash
npm install sevago-sso-fe
```

## Peer Dependencies

This library requires the following peer dependencies to be installed in your project:

```bash
npm install react react-dom @emotion/react @emotion/styled @mui/material @mui/system @reduxjs/toolkit react-redux react-router-dom redux-persist
```

## Usage

### Basic Setup

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { SystemMonitorScreen, store, persistor } from 'sevago-sso-fe';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <SystemMonitorScreen />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
```

### Using Individual Components

```tsx
import { 
  useSnackbar, 
  useApps,
  authApi,
  userApi 
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
  useUpdateCurrentAccess 
} from 'sevago-sso-fe';

function MyComponent() {
  const { showSnackbar } = useSnackbar();
  const { apps, loading } = useApps();
  const { updateAccess } = useUpdateCurrentAccess();
  
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
import { authApi, userApi, notificationApi } from 'sevago-sso-fe';

// Authentication
const loginResponse = await authApi.login({ email, password });
const logoutResponse = await authApi.logout({ token });

// User management
const user = await userApi.getUser(userId);
const updatedUser = await userApi.updateAccount(userData);

// Notifications
const notifications = await notificationApi.getListNotification(params);
await notificationApi.subscribeTopic({ token });
```

## API Reference

### Components
- `AppGrid`
- `AvatarElement`
- `AvatarUserInfo`
- `AvatarUserComponent`
- `BellComponent`
- `EmptyComponent`
- `LoadingComponent`
- `LogoComponent`
- `MotionBox`
- `TimeAgoContentComponent`
- `TimeAgoComponent`

### Hooks
- `useSnackbar()` - Snackbar notifications
- `useApps()` - Application management
- `useTagSelector()` - Tag selection functionality
- `useUpdateCurrentAccess()` - Access control updates
- `useVersionCheck(options)` - Version checking

### API Services
- `authApi` - Authentication operations
- `userApi` - User management
- `notificationApi` - Notification handling
- `orgUnitApi` - Organization unit management

### Redux Store
- `store` - Redux store instance
- `persistor` - Redux persist instance
- `remainingWeightSlice ` - Redux remainingWeightSlice
- `account` - login/logout/resetPassword/refreshToken/subscribeTopic/unsubscribeTopic/changeNotificationCount/changeSidebarCount/updateAccount/getAccount/updatePositionOrgUnit/updateCurrentAccess
- `system` - changeMode(GlobalSystemState)

### Utilities
- `renderRoutes` - Route rendering utility
- `routeConstants` - Route constants
- `STYLE` - Style constants
- `MODE` - Theme modes
- `timeUtils` - Time utility functions (getTimeAgo, getDateTime, getDate, checkNowYear,getMonthRangeForYear, getDayOffsetPx, isSameDateTime, getTimeDate, isDateString)

## Configuration

### Firebase Setup
Configure Firebase for notifications:

```tsx
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // Your Firebase config
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

## Styling

The library includes comprehensive styling constants and Material-UI theme customization:

```tsx
import { STYLE, MODE } from 'sevago-sso-fe';

// Use style constants
const customStyle = {
  padding: STYLE.PADDING_GAP_LAYOUT,
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
};

// Use theme modes
const theme = createTheme(MODE.light); // or MODE.dark
```

## TypeScript Support

Full TypeScript support is included with comprehensive type definitions:

```tsx
import type { 
  RootState, 
  AppDispatch, 
  LoginDto, 
  User, 
  Notification 
} from 'sevago-sso-fe';
```

## Development

To contribute to this library:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build library: `npm run build:lib`
5. Test the build: `npm run preview`
## Changelog