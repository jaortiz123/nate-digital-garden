# Gemini Project Instructions

This document provides project-specific instructions and context for the Gemini AI agent.

## Project Overview

This is a [Astro](https://astro.build/) project using [Tailwind CSS](https://tailwindcss.com/) for styling. The goal of this project is to create a personal website and digital garden.

## Tech Stack

- **Framework:** Astro
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Package Manager:** npm

## Getting Started

- **Install dependencies:** `npm install`
- **Run development server:** `npm run dev`
- **Build for production:** `npm run build`
- **Preview production build:** `npm run preview`

## Project Conventions

- **Component-based Architecture:** The project uses Astro components, located in `src/components`. When creating new UI elements, prefer creating a new Astro component.
- **Styling:** Use Tailwind CSS utility classes for styling. Custom styles are defined in `tailwind.config.mjs`. Do not use inline styles or create separate CSS files unless absolutely necessary.
- **Directory Structure:**
    - `src/components`: Reusable Astro components.
    - `src/layouts`: Base layouts for pages.
    - `src/pages`: Site pages.
    - `src/styles`: Global styles.
- **Path Aliases:** The alias `@` is configured to point to the `src` directory. Use this alias for imports (e.g., `import Component from '@/components/Component.astro'`).
- **Code Style:** Follow the existing code style. This project uses Prettier for code formatting (inferred from common practice, though no `.prettierrc` is visible).

## Gemini Instructions

- When adding new components, create a new `.astro` file in the `src/components` directory.
- When adding new pages, create a new `.astro` file in the `src/pages` directory.
- Use Tailwind CSS classes for all styling. Refer to `tailwind.config.mjs` for custom theme values (e.g., `bg-navy`, `text-fg`).
- Use the `@` path alias for imports.
- **TODO:** Replace the placeholder email address in `src/pages/about.astro` with your actual email address.
- **TODO:** Replace the placeholder project URLs in `src/pages/projects.astro` with the actual project URLs.
- **TODO:** Replace the placeholder Stripe links in the `src/pages/toolkit` directory with your actual Stripe links.
