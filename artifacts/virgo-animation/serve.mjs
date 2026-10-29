import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { resolve, extname, sep } from "node:path";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 8080);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".md": "text/plain; charset=utf-8",
};

createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const file = resolve(root, `.${pathname === "/" ? "/index.html" : pathname}`);
    if (!file.startsWith(root.endsWith(sep) ? root : root + sep)) {
      res.writeHead(403).end("Forbidden");
      return;
    }
    const data = await readFile(file);
    res.writeHead(200, {
      "Content-Type": types[extname(file)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(req.method === "HEAD" ? undefined : data);
  } catch {
    res.writeHead(404).end("Not found");
  }
}).listen(port, "0.0.0.0", () => {
  console.info(`Original HALLEY static site listening on port ${port}`);
});
