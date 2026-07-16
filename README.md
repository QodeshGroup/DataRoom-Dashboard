# Kilifi Legacy Estates — Pre-Development Data Room

A static, GitHub Pages–deployable investor data room for Kilifi Legacy Estates. Sixteen sections plus an Executive Summary and a Project Readiness Dashboard, styled to an institutional (Blackstone / Hines / Prologis-style) standard in black, purple and white.

## What's inside

```
kilifi-data-room/
├── index.html                      Executive Summary (headline metrics, section grid)
├── readiness-dashboard.html         Project Readiness Dashboard (milestone tracker)
├── assets/
│   ├── style.css                    Design system (colors, components, layout)
│   └── script.js                    Nav toggle, progress bar animation, checklist demo
└── sections/
    ├── 01-property-information.html
    ├── 02-zoning-planning.html
    ├── 03-government-approvals.html
    ├── 04-utilities.html
    ├── 05-infrastructure.html
    ├── 06-environmental.html
    ├── 07-engineering.html
    ├── 08-architectural.html
    ├── 09-financial-model.html
    ├── 10-legal.html
    ├── 11-market-research.html
    ├── 12-risk-analysis.html
    ├── 13-schedule.html
    ├── 14-esg.html
    ├── 15-team.html
    └── 16-appendix.html
```

Every field that isn't real data yet is marked with a bracketed placeholder, e.g. `[XX.X acres]`, `[Title Deed No.]`. Search the codebase for `[` to find every field still needing real input.

## Deploying to GitHub Pages

1. Create a new (private, if this should stay confidential) GitHub repository, e.g. `kilifi-legacy-estates-dataroom`.
2. Push this folder's contents to the repository root:
   ```bash
   cd kilifi-data-room
   git init
   git add .
   git commit -m "Initial data room"
   git branch -M main
   git remote add origin https://github.com/<your-org>/kilifi-legacy-estates-dataroom.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set Source to the `main` branch, root folder, and save.
4. GitHub will publish the site at `https://<your-org>.github.io/kilifi-legacy-estates-dataroom/` within a few minutes.
5. If the repo is **private**, GitHub Pages on a private repo requires GitHub Enterprise, or you can keep the repo private and use a separate private hosting option (e.g. Netlify/Vercel with password protection, or Cloudflare Access in front of Pages) — see the confidentiality note below.

No build step is required — this is plain HTML/CSS/JS and can also be opened locally by double-clicking `index.html`.

## Updating content

Everything is hand-editable HTML — open any file in `sections/` and replace bracketed placeholders directly. Status pills, progress bars, and the risk matrix use simple CSS classes (`status-approved`, `status-pending`, `status-notstarted`, `status-atrisk`) that you can reassign as milestones close out. Progress bar percentages are set via the `data-width` attribute on `.progress-fill` / `.gantt-bar` elements.

## On team logins & document uploads (not yet built)

You mentioned wanting team members to log in with a password and upload documents directly into the data room. Plain GitHub Pages only serves static files — it cannot authenticate users or accept uploads on its own. To add that, the site needs a backend, for example:

- **Supabase** (recommended) — free-tier auth (shared password or individual accounts) + file storage, called from this same static site via a few lines of JS.
- **Firebase** — Google's equivalent, same pattern.

Once you're ready, I can wire in a login gate and an upload panel (per-section) that stores files against the matching section and lists them inline. This will require you to create a free account with whichever provider you choose and share the project API keys.

## Confidentiality

This data room is marked "Confidential" in the sidebar footer of every page. If hosted publicly (e.g. free GitHub Pages), anyone with the URL can view it — there is no access control until an auth layer (see above) is added. For sensitive fundraising material, consider a private hosting option or add authentication before sharing the live link externally.
