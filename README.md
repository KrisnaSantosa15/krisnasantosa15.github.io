# Krisna Santosa — Portfolio

A high-craft, editorial-grade personal portfolio for **Krisna Santosa** —
Full-Stack Developer & Machine Learning Engineer.

Built with **React + Vite + Tailwind + Framer Motion + Lenis**. Fully static —
deploys to GitHub Pages with no backend required.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs /dist
npm run preview  # preview the production build locally
```

## Editing content

All content lives in **`src/data/`** — edit these files to update the site:

| File | What it controls |
|---|---|
| `profile.js` | Name, role, bio, location, stats, contact info, social links, resume URL |
| `projects.js` | All 26 projects (title, summary, description, category, tech, metrics, links) |
| `skills.js` | All ~52 skills (name, category, proficiency, years) |
| `experience.js` | Work history + education timeline |
| `awards.js` | Awards (8) + certifications (24) |

Drop a new resume into `public/resume.pdf` (referenced as `/resume.pdf`).

## Deploy to GitHub Pages

This site is configured for a **user/organization page** at the domain root
(`https://<username>.github.io/`), **not** a project subpath.

### One-time setup

1. Create (or rename) the repository to exactly **`krisnasantosa15.github.io`**
   — GitHub serves a repo named `<username>.github.io` from the root of
   `https://<username>.github.io/`.
2. Push this folder to the `main` branch of that repo.
3. In the repo: **Settings → Pages → Build and deployment → Source**, select
   **"GitHub Actions"**.

### How it deploys

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:
- Installs deps (`npm ci`), builds (`npm run build`)
- Uploads `dist/` and deploys it via `actions/deploy-pages`

The workflow handles everything automatically — no `gh-pages` branch, no manual
publish step.

### Why `base: '/'`?

`vite.config.js` sets `base: '/'` so built assets resolve from the domain root.
If you ever move the site to a project subpath
(`https://<username>.github.io/<repo>/`), change `base` to `'/<repo>/'`.

## Tech & design

- **Vite + React** — fast SPA, no routing (single scroll page)
- **TailwindCSS** — design tokens (ink/bone/acid/ember palette, editorial type scale)
- **Framer Motion** — kinetic typography, scroll reveals, layout animations
- **Lenis** — smooth scrolling, synced to all animations
- **Custom cursor** — blended dot + spring-trailing ring with contextual labels
- **Generated SVG covers** — each project gets a category-aware abstract cover
  (neural-net motifs for ML, layout grids for web, charts for data, terminals for others)
