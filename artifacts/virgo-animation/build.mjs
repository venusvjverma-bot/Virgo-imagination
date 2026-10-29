import { cp, mkdir } from "node:fs/promises";

const output = new URL("./dist/public/", import.meta.url);
await mkdir(output, { recursive: true });
for (const name of ["index.html", "terms.html", "privacy.html", "docs", "LICENSE", "README.md", "README.en.md"]) {
  await cp(new URL(`./${name}`, import.meta.url), new URL(name, output), {
    recursive: true,
  });
}
