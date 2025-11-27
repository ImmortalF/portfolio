# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

````js
export default defineConfig([
  globalIgnores(['dist']),
  {
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

    ---

    ## Accessibility & UX notes

    - Semantic HTML sections are used (`header`, `main`, `section`, `footer`).
    - Focus styles are implemented using a CSS variable so keyboard users can see focus rings.
    - Motion respects `prefers-reduced-motion` in the global styles.
    - Use `aria-*` attributes and `label` tags for forms when adding form handling.

    ---

    ## Contact form / backend (notes)

    You can implement contact handling in one of two ways:

    - Quick: use a third-party form service (Formspree, Getform) — minimal setup and no server code.
    - Controlled (recommended for production): create a small AWS Lambda endpoint (API Gateway + Lambda) that validates form input and sends mail with Amazon SES. Store secrets in Amplify environment variables or AWS Secrets Manager.

    If you plan to collect attachments, consider using pre-signed S3 uploads rather than posting files through Lambda.

    ---

    ## Deploying to AWS Amplify

    1. Connect your repository to Amplify and configure the build command: `npm run build` and the publish directory `dist`.
    2. Add environment variables in the Amplify console for any secrets (e.g., `RECAPTCHA_SECRET`, `CONTACT_EMAIL`).
    3. If using Lambda+SES, deploy the Lambda in the same AWS account/region and set the API endpoint in your frontend code (store it in Amplify env variables).

    Amplify docs: https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html

    ---

    ## Development tips & resources

    - Tailwind docs: https://tailwindcss.com/docs
    - Framer Motion (animations): https://www.framer.com/motion/
    - Google Fonts: https://fonts.google.com/
    - WCAG contrast checker: https://webaim.org/resources/contrastchecker/

    ---

    ## Contributing / Next steps

    - Add your projects and images to `src/assets/` and `src/data/projects.ts`.
    - Replace placeholder text in `src/components/*` with your own copy.
    - Add the contact backend or a third-party form provider.

    If you want, I can open a PR with these project scaffolds, wire the header toggle into the `Header` component, or help prepare an Amplify deployment. Tell me which next step you'd like.
````
