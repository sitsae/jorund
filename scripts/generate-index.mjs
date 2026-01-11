import { readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const assetsDir = join(process.cwd(), "build", "client", "assets");
const files = readdirSync(assetsDir);
const entry = files.find(
  (f) => f.startsWith("entry.client-") && f.endsWith(".js")
);

if (!entry) {
  console.error("Could not find entry.client-*.js in build/client/assets.");
  process.exit(1);
}

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>App</title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/assets/${entry}"></script>
  </body>
</html>`;

const outPath = join(process.cwd(), "build", "client", "index.html");
writeFileSync(outPath, html);
console.log("Wrote", outPath);
