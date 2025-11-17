# Sevago SSO Frontend Library

<div align="center">

A comprehensive Single Sign-On (SSO) frontend library built with React, TypeScript, and Material-UI.

[![npm version](https://img.shields.io/npm/v/sevago-sso-fe)](https://www.npmjs.com/package/sevago-sso-fe)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

</div>

---

## Features

- 🎨 Material-UI components with custom styling and theming
- 📱 Responsive design with mobile support
- 🎯 Full TypeScript support
- 🎭 Framer Motion animations
- 📊 System monitoring components
- 🔧 Utility functions and constants

---

## Installation

```bash
npm install sevago-sso-fe
```

### Peer Dependencies

```bash
npm install react@^19.2.0 react-dom@^19.2.0 @emotion/react@>=11 @emotion/styled@>=11 @mui/material@>=5 @mui/system@>=5 @reduxjs/toolkit@^2.9.2 react-redux@^9.2.0 react-router-dom@^7.9.5 redux-persist@^6.0.0
```

---

## Quick Start

### Basic Setup

```tsx
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import App from 'sevago-sso-fe';

function RootApp() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default RootApp;
```

---

## Usage

### Components

#### App Component

```tsx
import App from 'sevago-sso-fe';

<App />
```

#### System Monitor Screen

```tsx
import { SystemMonitorScreen, Environment, getCurrentEnvironment } from 'sevago-sso-fe';

const env = getCurrentEnvironment();

<SystemMonitorScreen 
  env={env}
  blacklist={[]} // Optional: list of paths to exclude
/>
```

#### App Grid

```tsx
import { AppGrid, Environment, getCurrentEnvironment } from 'sevago-sso-fe';

// AppGrid automatically handles URL routing:
// - If env is valid (develop/staging/production): uses configured URLs
// - If env is not valid (e.g., localhost): uses localhost with path

const env = getCurrentEnvironment(); // or Environment.DEVELOP, etc.

<AppGrid 
  apps={apps} 
  env={env}
  columns={5}
  rows={3}
  iconSize={80}
  showPagination={true}
/>
```

#### Sidebar Components

```tsx
import { AppsSidebar, SystemMonitorSidebarPart, Environment, getCurrentEnvironment } from 'sevago-sso-fe';

const env = getCurrentEnvironment();

<AppsSidebar 
  isOpen={true}
  onClose={() => {}}
  env={env}
  blacklist={[]} // Optional
/>
<SystemMonitorSidebarPart />
```

#### UI Elements

##### Avatar Elements
```tsx
import { 
  AvatarElement,
  AvatarOnlineStatusElement,
  AvatarUserInfo
} from 'sevago-sso-fe';

<AvatarElement src="/avatar.jpg" alt="User" />
<AvatarOnlineStatusElement src="/avatar.jpg" isOnline={true} />
<AvatarUserInfo name="John Doe" avatar="/avatar.jpg" />
```

##### Button Elements
```tsx
import { 
  ButtonElement,
  ButtonIconElement,
  ButtonIconCircleElement,
  ButtonIconSquareElement,
  ButtonIconContentOpacityElement,
  ButtonImageElement,
  ButtonUploadFileElement
} from 'sevago-sso-fe';

<ButtonElement onClick={handleClick}>Click me</ButtonElement>
<ButtonIconElement icon="home" onClick={handleClick} />
<ButtonIconCircleElement icon="user" onClick={handleClick} />
<ButtonUploadFileElement onUpload={handleUpload} />
```

##### Icon Elements
```tsx
import { 
  IconElement,
  IconContentElement,
  IconContentBadgeCountElement,
  IconContentBadgeCountSubsElement,
  IconButtonElement,
  IconContentSubsElement,
  IconContentOpacityElement
} from 'sevago-sso-fe';

<IconElement icon="home" />
<IconContentElement icon="user" content="Profile" />
<IconContentBadgeCountElement icon="notifications" count={5} />
```

##### Image Elements
```tsx
import { 
  ImageElement,
  ImageContentCaptionComponent,
  ImageContentTimeComponent,
  ImageSizeType
} from 'sevago-sso-fe';

<ImageElement url="/image.jpg" sizeType={ImageSizeType.SQUARE} />
<ImageContentCaptionComponent image="/image.jpg" caption="Caption text" />
<ImageContentTimeComponent image="/image.jpg" time={new Date()} />
```

##### Link Elements
```tsx
import { 
  LinkElement,
  LinkInternalElement
} from 'sevago-sso-fe';

<LinkElement href="/path" target="_blank">External Link</LinkElement>
<LinkInternalElement to="/internal">Internal Link</LinkInternalElement>
```

##### Form Elements
```tsx
import { 
  RadioElement,
  CheckboxElement
} from 'sevago-sso-fe';

<RadioElement value="option1" checked={true} onChange={handleChange} />
<CheckboxElement checked={false} onChange={handleChange} />
```

##### Typography Elements
```tsx
import { 
  TypographyContentCaption,
  TypographyOneLine
} from 'sevago-sso-fe';

<TypographyContentCaption>Caption text</TypographyContentCaption>
<TypographyOneLine>Long text that will be truncated...</TypographyOneLine>
```

##### Tabs Elements
```tsx
import { 
  TabsComponent,
  TabsSubsComponent,
  TabsBadgeCountComponent,
  TabsBadgeCountSubsComponent,
  TAB_STYLES,
  TAB_BACKGROUND_STYLES
} from 'sevago-sso-fe';

<TabsComponent tabs={tabs} value={value} onChange={handleChange} />
<TabsBadgeCountComponent tabs={tabs} badgeCounts={[5, 3, 2]} />
```

##### Time Ago Elements
```tsx
import { 
  TimeAgoComponent,
  TimeAgoContentComponent
} from 'sevago-sso-fe';

<TimeAgoComponent date={new Date()} />
<TimeAgoContentComponent date={new Date()} content="Posted" />
```

##### Other Elements
```tsx
import { 
  DialogElement,
  DialogConfirmActionElement,
  DashedDividerElement,
  MotionBox
} from 'sevago-sso-fe';

<DialogElement open={open} onClose={handleClose}>Content</DialogElement>
<DialogConfirmActionElement 
  open={open} 
  onConfirm={handleConfirm} 
  onCancel={handleCancel}
/>
<DashedDividerElement />
<MotionBox preset="fadeInUp" hover>Animated content</MotionBox>
```

### Constants

#### Style Constants

```tsx
import { STYLE, MODE, OPACITY } from 'sevago-sso-fe';

const customStyle = {
  padding: STYLE.PADDING_GAP_LAYOUT,
  borderRadius: STYLE.BORDER_RADIUS_ELEMENT,
  height: STYLE.HEIGHT_DEFAULT_TEXT_FIELD_BUTTON,
};
```

#### Theme Modes

```tsx
import { MODE } from 'sevago-sso-fe';
import { createTheme } from '@mui/material/styles';

const theme = createTheme(MODE.light); // or MODE.dark or MODE.other
```

#### Opacity Constants

```tsx
import { MODE, OPACITY } from 'sevago-sso-fe';

const semiTransparent = `${MODE.light.palette.primary.main}${OPACITY[50]}`;
```

### Utilities

#### Time Utils

```tsx
import { timeUtils } from 'sevago-sso-fe';

const timeAgo = timeUtils.getTimeAgo(new Date());
const dateTime = timeUtils.getDateTime(new Date());
const date = timeUtils.getDate(new Date());
```

#### String Utils

```tsx
import { stringUtils } from 'sevago-sso-fe';

// Use string utility functions
```

#### App Utils

```tsx
import { Environment, getCurrentEnvironment } from 'sevago-sso-fe';

// Get current environment based on hostname
const env = getCurrentEnvironment(); 
// Returns: Environment.DEVELOP | Environment.STAGING | Environment.PRODUCTION

// Environment enum values
const develop = Environment.DEVELOP; // "develop"
const staging = Environment.STAGING; // "staging"
const production = Environment.PRODUCTION; // "production"
```

### Enums

```tsx
import { AppCategory, Mode, OrderType, Environment } from 'sevago-sso-fe';

// Use enums
const category = AppCategory.ALL;
const mode = Mode.LIGHT;
const order = OrderType.ASC;
const env = Environment.DEVELOP;
```

---

## API Reference

### Components

| Component | Description | Props |
|-----------|-------------|-------|
| `App` | Main application component with theme provider | None |
| `SystemMonitorScreen` | System monitoring dashboard screen | `env: Environment`, `blacklist?: string[]` |
| `AppGrid` | Application grid component with smart URL routing | `apps: AppInfo[]`, `env: Environment`, `columns?: number`, `rows?: number`, `iconSize?: number`, `iconRadius?: number`, `gap?: number \| string`, `showPagination?: boolean`, `titleVariant?`, `titleColor?`, `captionColor?` |
| `AppsSidebar` | Applications sidebar component | `isOpen: boolean`, `onClose: () => void`, `env: Environment`, `position?: "left" \| "right"`, `blacklist?: string[]` |
| `SystemMonitorSidebarPart` | System monitor sidebar part | - |
| **Avatar Elements** | | |
| `AvatarElement` | Basic avatar element | `src`, `alt`, `sx?` |
| `AvatarOnlineStatusElement` | Avatar with online status indicator | `src`, `isOnline`, `sx?` |
| `AvatarUserInfo` | Avatar with user information | `name`, `avatar`, `sx?` |
| **Button Elements** | | |
| `ButtonElement` | Standard button | `onClick`, `children`, `variant?`, `sx?` |
| `ButtonIconElement` | Button with icon | `icon`, `onClick`, `sx?` |
| `ButtonIconCircleElement` | Circular icon button | `icon`, `onClick`, `sx?` |
| `ButtonIconSquareElement` | Square icon button | `icon`, `onClick`, `sx?` |
| `ButtonIconContentOpacityElement` | Button with icon and opacity content | `icon`, `content`, `onClick`, `sx?` |
| `ButtonImageElement` | Button with image | `image`, `onClick`, `sx?` |
| `ButtonUploadFileElement` | File upload button | `onUpload`, `accept?`, `sx?` |
| **Icon Elements** | | |
| `IconElement` | Basic icon | `icon`, `sx?` |
| `IconContentElement` | Icon with content | `icon`, `content`, `sx?` |
| `IconContentBadgeCountElement` | Icon with badge count | `icon`, `count`, `sx?` |
| `IconContentBadgeCountSubsElement` | Icon with badge count and subtitle | `icon`, `count`, `subtitle`, `sx?` |
| `IconButtonElement` | Icon button | `icon`, `onClick`, `sx?` |
| `IconContentSubsElement` | Icon with content and subtitle | `icon`, `content`, `subtitle`, `sx?` |
| `IconContentOpacityElement` | Icon with opacity content | `icon`, `content`, `opacity?`, `sx?` |
| **Image Elements** | | |
| `ImageElement` | Image element | `url: string`, `sizeType?: ImageSizeType`, `sx?` |
| `ImageContentCaptionComponent` | Image with caption | `image`, `caption`, `sx?` |
| `ImageContentTimeComponent` | Image with time | `image`, `time`, `sx?` |
| **Link Elements** | | |
| `LinkElement` | External link | `href`, `target?`, `children`, `sx?` |
| `LinkInternalElement` | Internal router link | `to`, `children`, `sx?` |
| **Form Elements** | | |
| `RadioElement` | Radio button | `value`, `checked`, `onChange`, `sx?` |
| `CheckboxElement` | Checkbox | `checked`, `onChange`, `label?`, `sx?` |
| **Typography Elements** | | |
| `TypographyContentCaption` | Typography with caption | `children`, `variant?`, `color?`, `sx?` |
| `TypographyOneLine` | Single line typography (truncated) | `children`, `variant?`, `sx?` |
| **Tabs Elements** | | |
| `TabsComponent` | Basic tabs | `tabs`, `value`, `onChange`, `sx?` |
| `TabsSubsComponent` | Tabs with subtitles | `tabs`, `value`, `onChange`, `sx?` |
| `TabsBadgeCountComponent` | Tabs with badge counts | `tabs`, `badgeCounts`, `value`, `onChange`, `sx?` |
| `TabsBadgeCountSubsComponent` | Tabs with badge counts and subtitles | `tabs`, `badgeCounts`, `value`, `onChange`, `sx?` |
| **Time Elements** | | |
| `TimeAgoComponent` | Time ago display | `date`, `sx?` |
| `TimeAgoContentComponent` | Time ago with content | `date`, `content?`, `sx?` |
| **Other Elements** | | |
| `DialogElement` | Dialog/modal | `open`, `onClose`, `children`, `sx?` |
| `DialogConfirmActionElement` | Confirmation dialog | `open`, `onConfirm`, `onCancel`, `title?`, `content?`, `sx?` |
| `DashedDividerElement` | Dashed divider line | `sx?` |
| `MotionBox` | Framer Motion animated box | `preset?`, `animate?`, `transition?`, `children`, `hover?`, `index?`, `sx?` |

**Note:** `AppGrid` automatically handles URL routing:
- If `env` is a valid Environment enum value (develop/staging/production): uses configured URLs from `app.path[env]`
- If `env` is not valid (e.g., localhost development): extracts path and uses `window.location.origin` with the path

### Constants

- **`STYLE`** - Style constants (padding, border radius, heights, etc.)
- **`MODE`** - Theme modes (light, dark, other)
- **`OPACITY`** - Opacity constants (0-100)
- **`REG_EXP`** - Regular expression constants
- **`TYPOGRAPHY`** - Typography constants

### Utilities

- **`timeUtils`** - Time utility functions
  - `getTimeAgo(date)`
  - `getDateTime(date)`
  - `getDate(date)`
  - `checkNowYear(date)`
  - `getMonthRangeForYear(year)`
  - `getDayOffsetPx(day)`
  - `isSameDateTime(date1, date2)`
  - `getTimeDate(date)`
  - `isDateString(str)`

- **`stringUtils`** - String utility functions
- **`getLimitLineCss`** - CSS utility for limiting lines
- **`Environment`** - Environment enum (DEVELOP, STAGING, PRODUCTION)
- **`getCurrentEnvironment()`** - Detects current environment based on hostname
  - Returns `Environment.DEVELOP` if hostname includes "dev."
  - Returns `Environment.STAGING` if hostname includes "sta."
  - Returns `Environment.PRODUCTION` otherwise

### Enums

- **`AppCategory`** - Application category enum
- **`Mode`** - Theme mode enum
- **`OrderType`** - Order type enum
- **`Environment`** - Environment enum (DEVELOP, STAGING, PRODUCTION)
- **`AppGroup`** - Application group enum (ALL, HRM, WORKFLOW_ENGINE, PLATFORM_AND_INFO, B2B, OTHER, CLIENT)
- **`ImageSizeType`** - Image size type enum

---

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type { 
  AppInfo,
  AppGridProps,
  SystemMonitorScreenProps,
  AppsSidebarProps,
  Environment
} from 'sevago-sso-fe';

// AppInfo interface
interface AppInfo {
  path: {
    develop: string;
    staging: string;
    production: string;
  };
  content: string;
  color: string;
  icon: string;
  group: AppGroup;
}
```

---

## Development

### Prerequisites

- Node.js >= 16.x
- npm >= 7.x

### Getting Started

```bash
# Clone the repository
git clone https://github.com/dev1-gmail2025/sevago-sso-fe.git
cd sevago-sso-fe

# Install dependencies
npm install

# Run development server
npm run dev

# Build library
npm run build:lib

# Lint code
npm run lint
```

---

## License

MIT

---

## Support

- **GitHub Issues:** [https://github.com/dev1-gmail2025/sevago-sso-fe/issues](https://github.com/dev1-gmail2025/sevago-sso-fe/issues)
- **Repository:** [https://github.com/dev1-gmail2025/sevago-sso-fe](https://github.com/dev1-gmail2025/sevago-sso-fe)

---

<div align="center">

**Made with ❤️ for the Sevago SSO ecosystem**

</div>
