# SUSARA Electronics — Website (React + Vite)

The website of SUSARA Electronics company. A React application built with Vite and styled with Tailwind CSS. Includes a simple Business Assistant chatbot that can answer common questions about hours, contact, and location.

- App lives under the `web/` directory
- Fast local development with Vite
- One-command deployment to GitHub Pages

## Tech stack

- React 19 + Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite`)
- Icons: `lucide-react`
- Animations: `react-lottie-player`
- Linting: ESLint 9
- Deployment: `gh-pages`

Key configs:
- Vite base path set to `/SUSARAElectronics` in `web/vite.config.js`
- Project homepage set in `web/package.json`

## Features

- Chat UI component at `web/src/components/Chatbot.jsx`
- Simple intent detection for:
  - Business hours
  - Contact information
  - Location/address
- Modern React SPA scaffold with opinionated defaults

## Requirements

- Node.js 18+ (LTS recommended)
- npm 9+

## Repository layout

```
.
├── web/                # React app root
│   ├── src/
│   │   ├── components/
│   │   │   └── Chatbot.jsx
│   │   └── ...         # App source
│   ├── index.html
│   ├── vite.config.js  # Base path set for GitHub Pages
│   └── package.json    # Scripts, deps, homepage, deploy
└── README.md
```

## Getting started

1) Install dependencies
```bash
cd web
npm install
```

2) Run the dev server
```bash
# Vite dev server with HMR
npm run dev
```

3) Build for production
```bash
npm run build
```

4) Preview the production build locally
```bash
npm run preview
```

5) Lint the code
```bash
npm run lint
```

## Scripts (from web/package.json)

- `dev` — Start Vite dev server
- `build` — Build production assets to `dist/`
- `preview` — Preview the production build
- `lint` — Run ESLint
- `deploy` — Publish the contents of `dist/` to GitHub Pages (runs `build` first via `predeploy`)

## Deployment (GitHub Pages)

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

1) Build and deploy
```bash
cd web
npm run deploy
```

2) In your GitHub repository settings:
- Go to “Pages”
- Set the source to “Deploy from a branch”
- Select branch: `gh-pages`
- Set folder: `/ (root)`

3) Access your site after Pages finishes building:
- Project Pages URL: `https://indubrolk.github.io/SUSARAElectronics/`

Notes:
- Vite `base` is set to `/SUSARAElectronics` in `web/vite.config.js` to ensure correct asset paths when hosted under a subpath.
- The `homepage` field is set in `web/package.json` to align with GitHub Pages hosting.

## Customization

- Components: Add or modify UI under `web/src/components/`
- Styles: Tailwind CSS is enabled via the Vite plugin; use Tailwind utility classes in your JSX
- Icons: Import from `lucide-react` as needed

## Troubleshooting

- Blank page or 404 on refresh in production:
  - Ensure GitHub Pages is serving from the `gh-pages` branch
  - Confirm the Vite `base` path matches the repository name
- Assets not loading:
  - Rebuild and redeploy (`npm run deploy`) after changing the repo name or Pages settings

## Contributing

- Fork the repo and create a feature branch
- Run `npm run lint` before opening a PR
- Keep PRs focused and concise

## License

Add your project license here (e.g., MIT).
