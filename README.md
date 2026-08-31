# Garuda Media Telematika 2.0 Jombang

Production website for Garuda Media Telematika 2.0 Jombang, built with Next.js App Router, React, TypeScript, and Tailwind CSS.

Production domain: [https://garudamedia.net](https://garudamedia.net)

## Local setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the development URL printed by the Next.js CLI. No environment variables are currently required; the canonical production domain is centralized in `src/config/site.ts`.

## Project structure

- `src/app` contains App Router pages, the root layout, global styles, and metadata routes.
- `src/components/layout` contains shared page-shell components.
- `src/components/sections` contains reusable marketing-page sections.
- `src/config` contains site, navigation, and contact configuration.
- `src/data` contains package, coverage, feature, and installation-process content.
- `public/images` contains static brand and page imagery.

The main routes are `/`, `/paket`, and `/tentang`.

Contact details are centralized in `src/config/contact.ts`.

## Scripts

```bash
npm run dev        # Start the local development server
npm run build      # Create a production build
npm run start      # Run the production build
npm run lint       # Run ESLint
npm run typecheck  # Check TypeScript without emitting files
```
