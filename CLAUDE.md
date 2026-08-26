# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Website for JYTY (Jyväskylän Teekkariyhdistys ry), a Finnish student association. Content and UI copy are in Finnish. Built with Next.js (pages router) and statically exported as a fully static site (no server-side rendering at runtime, no API routes).

## Commands

```sh
npm install    # install dependencies
npm run dev    # start dev server
npm run build  # static export (output goes to ./out, per next.config.js `output: 'export'`)
npm start      # serve the production build (requires `next build` first; not compatible with static export output)
```

There is no lint or test setup in this repo.

## Architecture

- **Pages router, static export**: `next.config.js` sets `output: 'export'`. This means no API routes, no server-side rendering, no `next/image` optimization (loader), and no dynamic behavior beyond what runs client-side in the browser. Any new page must be statically generatable — dynamic routes (`pages/kuulumiset/[slug].js`, `pages/tapahtumat/[slug].js`) use `getStaticPaths` (`fallback: false`) + `getStaticProps` to pre-render all pages from local JSON data at build time.
- **Content lives in `data/*.json`, not a CMS**: each page pulls its content from a JSON file in `data/` (e.g. `events.json`, `kuulumiset.json`, `hallitukset.json`, `saannot.json`, `lakkisaannot.json`, `homeSections.json`, `homeResources.json`). To update site content (news posts, events, board members, rules), edit the relevant JSON file directly rather than the page component. News/event bodies are stored as HTML strings and rendered via `dangerouslySetInnerHTML`.
- **`data/hallitukset.json`** stores one board roster per year under `hallitukset[]`, with a top-level `current` field pointing at the active year. `pages/hallitus.js` lets users switch between years client-side and splits members into "leadership" (matched against a hardcoded `leadershipTitles` list) vs. others.
- **Layout composition**: every page wraps its content in `components/Layout.js`, which renders `Navbar`, `Footer`, and per-page `<Head>` metadata (title/description/canonical/OG tags). Pass `title`, `description`, and optionally `fullWidth` (skips the default `container-wide` wrapper) as props.
- **Styling**: CSS Modules per page/component (`styles/*.module.css`), plus `styles/shared.css` imported globally in `pages/_app.js` for shared layout primitives (e.g. `container-wide`, `stack-gap`, `container-readable` utility classes used directly as `className` strings). Tailwind (v4, via `@tailwindcss/postcss`) is a devDependency but not wired into `_app.js`/globals — check before assuming Tailwind classes are active.
- **Images**: served from `public/`, referenced with plain `<img src="/...">` (not `next/image`, since it's incompatible with static export without a custom loader).
- **Vappustriimi** (`pages/vappustriimi.js`): embeds an external Owncast stream via `NEXT_PUBLIC_STREAM_URL` env var, building iframe URLs for video and chat.
