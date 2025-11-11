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
import { SystemMonitorScreen } from 'sevago-sso-fe';

<SystemMonitorScreen />
```

#### App Grid

```tsx
import { AppGrid } from 'sevago-sso-fe';

<AppGrid apps={apps} onAppClick={handleAppClick} loading={loading} />
```

#### Sidebar Components

```tsx
import { AppsSidebar, SystemMonitorSidebarPart } from 'sevago-sso-fe';

<AppsSidebar />
<SystemMonitorSidebarPart />
```

#### UI Elements

```tsx
import { 
  ImageElement,
  RadioElement,
  TypographyContentCaption,
  MotionBox
} from 'sevago-sso-fe';

<ImageElement src="/path/to/image.jpg" alt="Image" />
<RadioElement value="option1" checked={true} onChange={handleChange} />
<TypographyContentCaption>Caption text</TypographyContentCaption>
<MotionBox animate={{ opacity: 1 }}>Animated content</MotionBox>
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
import { appUtils } from 'sevago-sso-fe';

// Use app utility functions
```

### Enums

```tsx
import { AppCategory, Mode, OrderType } from 'sevago-sso-fe';

// Use enums
const category = AppCategory.ALL;
const mode = Mode.LIGHT;
const order = OrderType.ASC;
```

---

## API Reference

### Components

| Component | Description | Props |
|-----------|-------------|-------|
| `App` | Main application component with theme provider | None |
| `SystemMonitorScreen` | System monitoring dashboard screen | - |
| `AppGrid` | Application grid component | `apps`, `onAppClick`, `loading` |
| `AppsSidebar` | Applications sidebar component | - |
| `SystemMonitorSidebarPart` | System monitor sidebar part | - |
| `ImageElement` | Image element | `src`, `alt`, `width`, `height` |
| `RadioElement` | Radio button element | `value`, `checked`, `onChange` |
| `TypographyContentCaption` | Typography caption component | `children`, `variant`, `color` |
| `MotionBox` | Framer Motion animated box | `animate`, `transition`, `children` |

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
- **`appUtils`** - Application utility functions
- **`getLimitLineCss`** - CSS utility for limiting lines

### Enums

- **`AppCategory`** - Application category enum
- **`Mode`** - Theme mode enum
- **`OrderType`** - Order type enum

---

## TypeScript Support

Full TypeScript support with comprehensive type definitions:

```tsx
import type { 
  // Add your types here based on actual exports
} from 'sevago-sso-fe';
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
