# virgo-animation

An import of https://github.com/angeljgc-dev/halley-planetario with user-approved Virgo Imagination copy and constellation updates.

## Scope

Preserve the original visuals, assets, layout, and animations. Do not
redesign, convert to React, or change content beyond specifically approved sections.
The user requested the repository itself, not a generated replacement.
When editing project portfolio entries, preserve the original right-side dotted
orbital graphics and their movement exactly; the user explicitly reiterated this
requirement when requesting new left-side images.

## Business positioning

The user approved Virgo Imagination as an independent AI venture studio that
builds and operates multiple independent AI-powered projects and digital products.
Describe it as a studio operating its own projects, not as a client-services agency.

## Run

The root web preview serves `artifacts/virgo-animation/index.html` over HTTP.
Run command: `pnpm --filter @workspace/virgo-animation run dev`.
`serve.mjs` is a dependency-free static HTTP server, binding to `0.0.0.0`
and the workflow-provided `PORT`. No database or API is required.

The site uses external CDN scripts, fonts, photos, and a lunar texture.
Only specifically requested section images have been replaced; the other
original URLs remain unchanged and require internet access.

The imported README files, license, and documentation images are alongside
the original HTML. `build.mjs` only copies these files for static publishing.
The pre-provided API and canvas packages are unused by this site.
