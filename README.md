# Expo Template — Auth + Expo Router

Starter template for Expo with an authentication flow and navigation powered by Expo Router. This project includes a  `app/` structure for Expo Router, a login screen, protected routes, session management via Zustand, and a basic theme system.

## Features
- **Expo Router**: File-system based navigation under `app/` (tabs, modal, protected layout).
- **Auth flow**: `login` screen, protected routes in `app/(protected)/`, and the `src/hooks/useAuth.ts` hook.
- **Session management (Zustand)**: Persisted user session via `src/services/zustand/session.ts` and `src/services/zustand/persist.ts`.
- **Theme & UI**: Colors, fonts, dimstandardensions in `src/theme/` plus reusable UI components in `src/components/`.
- **Assets & Animations**: Ready-to-extend `assets/` and `src/assets/` folders.

## Project Structure

```
my-app/
├── app/                              # Expo Router file-based navigation
│   ├── _layout.tsx                   # Root layout component
│   ├── index.tsx                     # Home screen
│   ├── login.tsx                     # Login screen
│   └── (protected)/                  # Protected routes (require auth)
│       ├── _layout.tsx               # Protected layout wrapper
│       ├── modal.tsx                 # Modal screen
│       └── (tabs)/                   # Tab navigation group
│           ├── _layout.tsx           # Tab layout configuration
│           ├── explore.tsx           # Explore tab screen
│           └── index.tsx             # Main tab screen
├── assets/                           # Static assets (legacy location)
│   ├── index.ts                      # Asset exports
│   ├── animations/                   # Animation files
│   ├── fonts/                        # Font files
│   └── images/                       # Image assets
├── src/                              # Source code
│   ├── assets/                       # Modern asset organization
│   │   ├── index.ts                  # Centralized asset exports
│   │   ├── animations/               # Lottie animations, GIFs
│   │   ├── fonts/                    # Custom fonts
│   │   └── images/                   # App images and icons
│   ├── components/                   # Reusable UI components
│   │   ├── external-link.tsx         # External link component
│   │   ├── haptic-tab.tsx            # Tab with haptic feedback
│   │   ├── hello-wave.tsx            # Welcome animation component
│   │   ├── parallax-scroll-view.tsx  # Parallax scrolling container
│   │   ├── themed-text.tsx           # Text with theme support
│   │   ├── themed-view.tsx           # View with theme support
│   │   └── ui/                       # Base UI components
│   │       ├── collapsible.tsx       # Collapsible section
│   │       ├── icon-symbol.tsx       # Icon component
│   │       └── icon-symbol.ios.tsx   # iOS-specific icon
│   ├── constants/                    # App constants
│   │   └── theme.ts                  # Theme constants
│   ├── data/                         # Data layer
│   │   ├── hooks/                    # Data fetching hooks
│   │   ├── model/                    # Data models/types
│   │   └── repositories/             # Data repositories
│   ├── hooks/                        # Custom React hooks
│   │   ├── use-color-scheme.ts       # Color scheme detection
│   │   ├── use-color-scheme.web.ts   # Web-specific color scheme
│   │   ├── use-theme-color.ts        # Theme color utilities
│   │   └── useAuth.ts                # Authentication hook
│   ├── localization/                 # Internationalization
│   ├── services/                     # Business logic services
│   │   ├── auth/                     # Authentication services
│   │   │   └── authService.ts        # Auth API integration
│   │   └── zustand/                  # State management
│   │       ├── IZustandPersistModel.ts   # Persist store interface
│   │       ├── IZustandSessionModel.ts   # Session store interface
│   │       ├── persist.ts            # Persistence configuration
│   │       └── session.ts            # Session state management
│   ├── theme/                        # Theming system
│   │   ├── dimensions.ts             # Layout dimensions
│   │   ├── fonts.ts                  # Font configurations
│   │   ├── globalStyle.ts            # Global styles
│   │   ├── index.tsx                 # Theme provider
│   │   ├── colors/                   # Color definitions
│   │   │   ├── colors.ts             # Main color palette
│   │   │   ├── colorsSakura.ts       # Sakura theme colors
│   │   │   └── IAppColor.ts          # Color interface
│   │   └── fonts/                    # Font-related utilities
│   └── utils/                        # Utility functions
│       ├── Closure.ts                # Closure utilities
│       ├── enum.ts                   # Enum definitions
│       └── function/                 # Helper functions
│           └── index.ts              # Function exports
├── scripts/                          # Build and utility scripts
│   └── reset-project.js             # Project reset script
├── app.json                          # Expo configuration
├── package.json                      # Dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── eslint.config.js                  # ESLint rules
└── expo-env.d.ts                     # Expo TypeScript definitions
```

### Folder Descriptions

- **`app/`**: Expo Router navigation structure with file-based routing
- **`src/assets/`**: Modern asset organization with centralized exports
- **`src/components/`**: Reusable UI components with theming support
- **`src/constants/`**: Application-wide constants and configurations
- **`src/data/`**: Data layer including models, hooks, and repositories
- **`src/hooks/`**: Custom React hooks for various functionalities
- **`src/localization/`**: Internationalization and localization files
- **`src/services/`**: Business logic services and external integrations
- **`src/theme/`**: Comprehensive theming system with colors, fonts, and styles
- **`src/utils/`**: Utility functions and helper modules
- **`scripts/`**: Development and build scripts

## Quick Start
Requirements: Node.js and Expo CLI.

```bash
# Install dependencies
npm install

# Start the project
npx expo start
```

## Utility Scripts
- **Reset project**: `scripts/reset-project.js`

```bash
node scripts/reset-project.js
```

## Notes
- This is a baseline template; customize `authService.ts` to integrate with your real API.
- The `app/(protected)/` area illustrates guarding screens when the user is not authenticated.
