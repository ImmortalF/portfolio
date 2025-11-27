# Portfolio (Vite + React + TypeScript)

This repository is a personal portfolio site built with Vite, React, TypeScript and Tailwind CSS. It is set up as a minimal, accessible, and themable starter so you can showcase projects, skills and a downloadable resume.

This README explains how to run the project locally, how content is organized, design choices (fonts & colors), and notes about deploying to AWS Amplify.

---

## Quick start

- Install dependencies:

```bash
npm install
```

- Run the dev server:

```bash
npm run dev
```

- Build for production:

```bash
npm run build
```

The dev server runs at `http://localhost:5173/` by default.

---

## Project layout (important files)

- `index.html` – main HTML file (fonts are preloaded here).
- `src/main.tsx` – app entry.
- `src/App.tsx` – composes the `MainLayout` and pages.
- `src/index.css` – global styles, CSS variables for theme tokens, and Tailwind layers.
- `tailwind.config.cjs` – Tailwind configuration (references CSS variables).
- `src/components/` – UI sections and small components (Header, Hero, About, Projects, Contact, Footer, ThemeToggle).
- `src/hooks/useTheme.ts` – theme detection & persistence hook.
- `src/data/` – simple JS/TS data for projects and other site content.
- `public/resume.pdf` – place your resume here to serve at `/resume.pdf`.

---

## How to edit content

- Projects: edit `src/data/projects.ts` (each item should follow the `Project` type in `src/types/index.ts`).
- Skills and About: edit `src/components/Skills/Skills.tsx` and `src/components/About/About.tsx` (or replace these with dynamic data in `src/data/`).
- Resume: drop `resume.pdf` into the `public/` folder — the link `/resume.pdf` will work on the deployed site.

---

## Theme, fonts & colors

This project uses semantic CSS variables defined in `src/index.css`:

- `--bg`, `--surface`, `--text`, `--muted`, `--accent` — colors for light and `.dark` theme.
- `--font-heading`, `--font-body` — font stacks for headings and body text.

Default fonts (preloaded in `index.html`): `Oswald` (heading) and `Lato` (body). Font files are requested via Google Fonts with `display=swap` for good UX.

Accent color (CTA): `#cc5500` (shared between light and dark themes). Verify button contrast when adding small text over the accent and prefer `bg-accent text-white` for primary CTAs if needed.
