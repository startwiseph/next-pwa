# Next.js PWA Template

A modern, production-ready Progressive Web App (PWA) template built with Next.js 16, React 19, TypeScript, and Serwist. This template provides everything you need to build a fast, installable web application with offline support.

## ✨ Features

- 🚀 **Next.js 16** with Turbopack for lightning-fast development
- ⚛️ **React 19** with the latest features
- 📱 **Progressive Web App** support with Serwist
- 🎨 **Tailwind CSS v4** for modern styling
- 📝 **TypeScript** for type safety
- 🎯 **React Compiler** enabled for optimized performance
- 📦 **Service Worker** with runtime caching and precaching
- 🔤 **Geist Fonts** (Sans & Mono) from Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone or use this template**
   ```bash
   git clone https://github.com/startwiseph/next-pwa.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

## 📁 Project Structure
A quick rundown of the entire repository. Feel free to own this and edit according to your need.
```
next-pwa/
├── public/
│   ├── manifest.json          # PWA manifest configuration
│   ├── screenshots/           # Screenshots
│   └── svgs/                  # Static SVG assets
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles with Tailwind
│   └── sw.ts                  # Service worker configuration
│
├── next.config.ts             # Next.js configuration with Serwist
├── tsconfig.json              # TypeScript configuration
├── vitest.config.ts           # Vitest test configuration
└── postcss.config.mjs         # PostCSS configuration
```

## ⚙️ Configuration

> [!IMPORTANT]
> Serwist is disabled in development mode due to Turbopack compatibility. The service worker will only be active in production builds. This is configured automatically in `next.config.ts`.

### PWA Configuration

The PWA is configured using Serwist in `next.config.ts`. The service worker is automatically disabled in development mode to avoid Turbopack compatibility issues.

**Key settings:**
- Service worker source: `src/sw.ts`
- Service worker destination: `public/sw.js`
- Disabled in development (enabled in production only)

### Service Worker

The service worker (`src/sw.ts`) includes:
- **Precaching** of static assets
- **Runtime caching** with default strategies
- **Navigation preload** for faster navigation
- **Skip waiting** and **clients claim** for immediate updates

### PWA Manifest

Edit `public/manifest.json` to customize:
- App name and description
- Icons and theme colors
- Display mode and orientation
- Start URL

## 📱 PWA Features

### Installation

Users can install your PWA on:
- **Desktop**: Chrome, Edge, Safari (macOS)
- **Mobile**: Chrome (Android), Safari (iOS)

### Offline Support

The service worker provides:
- Offline page caching
- API response caching
- Image and asset caching
- Background sync capabilities

### Customization

To customize caching strategies, edit `src/sw.ts` and modify the `runtimeCaching` configuration. See the [Serwist documentation](https://serwist.pages.dev/docs/build/configuring) for more options.

## 🤝 Contributing

This is a public template. Feel free to fork, modify, and use it for your projects!