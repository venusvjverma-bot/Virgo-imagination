# virgo-animation

An unchanged import of https://github.com/angeljgc-dev/halley-planetario.

## Scope

Preserve the original source, visuals, assets, layout, and animations. Do not
redesign, convert to React, or add business content or unrelated features.
The user requested the repository itself, not a generated replacement.

## Run

The root web preview serves `artifacts/virgo-animation/index.html` over HTTP.
Run command: `pnpm --filter @workspace/virgo-animation run dev`.
`serve.mjs` is a dependency-free static HTTP server, binding to `0.0.0.0`
and the workflow-provided `PORT`. No database or API is required.

The original site uses external CDN scripts, fonts, photos, and a lunar texture.
These original URLs are intentionally unchanged and require internet access.

The imported README files, license, and documentation images are alongside
the original HTML. `build.mjs` only copies these files for static publishing.
The pre-provided API and canvas packages are unused by this site.
