# Garuda Media Telematika 20 Jombang

Production website for Garuda Media Telematika 20 Jombang, built with Next.js App Router, React, TypeScript, and Tailwind CSS.

The production domain is configured through `NEXT_PUBLIC_SITE_URL`.

## Local setup

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local`, then set `NEXT_PUBLIC_SITE_URL` to the
deployment domain. Open the development URL printed by the Next.js CLI.

The deployment environment must define the same variable before running the
production build. Metadata, canonical URLs, Open Graph, sitemap, robots, and
structured data all read from this single source.

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
