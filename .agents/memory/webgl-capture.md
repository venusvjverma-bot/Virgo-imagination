---
name: WebGL capture limitation
description: Distinguish screenshot-browser GPU failure from an import or HTTP failure.
---

The screenshot browser failed to create a WebGL context when viewing the
unchanged upstream HALLEY site. HTTP delivery and byte-for-byte source
comparison succeeded. That capture did not verify the 3D animation.

**Why:** A GPU-context failure in the capture browser is not evidence that
the original source was imported incorrectly.

**How to apply:** Preserve upstream animation code. Report this limitation
honestly and verify WebGL rendering in a GPU-capable browser if requested.
