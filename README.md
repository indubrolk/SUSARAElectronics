# SUSARAElectronics

Simple React frontend for a Business Assistant chatbot (asks about hours, contact, location). The app lives in the `web` folder. Use this README to run, build, and deploy (GitHub Pages) the app.

## Features
- Chat UI component at `web/src/components/Chatbot.jsx`
- Intent detection for hours, contact, and location
- Tailwind UI styles and `lucide-react` icons (ensure dependencies installed)

## Tech
- JavaScript / React
- npm
- Tailwind CSS (project-dependent)
- Optional: Vite or Create React App (check `web/package.json` scripts)

## Prerequisites
- Node.js (v16+ recommended)
- npm (v8+)

## Local development
1. Open a terminal in the project root.
2. Install dependencies and start the dev server:
```bash
cd web
npm install
# Check available scripts in `web/package.json`
# Common commands:
npm run dev     # Vite
npm start       # CRA or custom
