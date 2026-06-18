import { readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, "lessons");
const files = (await readdir(dir)).filter(f => /^[A-Z]{1,3}\d\.\d\.mjs$/.test(f)).sort();
const WPS = 360, TAIL = 500;
let problems = 0;
for (const f of files) {
  try {
    const mod = await import(pathToFileURL(join(dir, f)).href);
    const def = mod.default;
    const slides = def.slides || [];
    let words = 0, missingNarr = 0, badLayout = 0, hasMd = 0;
    const allowed = new Set(["cover","point","list","action","tip","recap"]);
    let totalMs = 0;
    const layoutSeq = [];
    for (const s of slides) {
      layoutSeq.push(s.layout);
      if (!s.narration || !s.narration.trim()) missingNarr++;
      else { const w = s.narration.trim().split(/\s+/).length; words += w; totalMs += w*WPS + TAIL;
        if (/[*#]|%/.test(s.narration)) hasMd++; }
      if (!allowed.has(s.layout)) badLayout++;
    }
    // longest run of same layout
    let run=1,maxRun=1; for(let i=1;i<layoutSeq.length;i++){ if(layoutSeq[i]===layoutSeq[i-1]){run++;maxRun=Math.max(maxRun,run);}else run=1; }
    const mins = (totalMs/60000);
    const issues = [];
    if (mins < 9.5) issues.push("UNDER_TIME");
    if (mins > 16) issues.push("OVER_TIME");
    if (missingNarr) issues.push(`MISSING_NARR=${missingNarr}`);
    if (badLayout) issues.push(`BAD_LAYOUT=${badLayout}`);
    if (hasMd) issues.push(`SYMBOLS_IN_NARR=${hasMd}`);
    if (maxRun > 2) issues.push(`LAYOUT_RUN=${maxRun}`);
    if (slides.length < 24) issues.push(`FEW_SLIDES=${slides.length}`);
    if (issues.length) problems++;
    console.log(`${f}: ${String(slides.length).padStart(2)} slides, ${String(words).padStart(4)} w, ~${mins.toFixed(1)}min ${issues.length?"⚠ "+issues.join(" "):"✓ ok"}`);
  } catch (e) {
    problems++;
    console.log(`${f}: ❌ PARSE ERROR — ${e.message.split("\n")[0]}`);
  }
}
console.log(`\n${files.length} files, ${problems} with issues.`);
