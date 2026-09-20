// Vérité CI locale — remplace randoma11y en ligne (outil manuel).
// Assert les paires du lockup tokens.css >= 4.5:1 (WCAG 2.1 texte),
// en light ET dark (HIG dark-mode.md: 4.5:1 min, 7:1 visé pour le custom).
import fs from "node:fs";

function lum(hex) {
  const c = hex.replace("#", "");
  const v = [0, 2, 4].map((i) => {
    const x = parseInt(c.slice(i, i + 2), 16) / 255;
    return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * v[0] + 0.7152 * v[1] + 0.0722 * v[2];
}
function ratio(a, b) {
  const [l1, l2] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (l1 + 0.05) / (l2 + 0.05);
}

// [name, fg, bg, min] — hex mirrors of the rgb triplets in tokens.css
const PAIRS = [
  // Light (HIG color.md › System colors)
  ["light ink/text", "#1d1d1f", "#ffffff", 4.5],
  ["light muted fix", "#6e6e73", "#ffffff", 4.5],
  ["light action link", "#0066cc", "#ffffff", 4.5],
  ["light focus ring", "#0071e3", "#ffffff", 4.5],
  ["light sky on-dark-tile", "#2997ff", "#272729", 4.5],
  ["light ink on parchment", "#1d1d1f", "#f5f5f7", 4.5],
  ["light white on tile1", "#ffffff", "#272729", 4.5],
  // Dark (HIG dark-mode.md › Dark Mode colors — base vs elevated)
  ["dark label on black", "#ffffff", "#000000", 4.5],
  ["dark secondary on black", "#aeaeb8", "#000000", 4.5],
  ["dark action link on black", "#2997ff", "#000000", 4.5],
  ["dark action link on grouped", "#2997ff", "#1c1c1e", 4.5],
  ["dark white on action fill", "#ffffff", "#0071e3", 4.5],
  ["dark focus ring on black", "#2997ff", "#000000", 4.5],
  ["dark white on elevated card", "#ffffff", "#2c2c2e", 4.5],
  ["dark sky on grouped", "#2997ff", "#1c1c1e", 3.0],
  // iOS status palette on black (fills/icons — informational floor 3:1)
  ["dark success", "#30d158", "#000000", 3.0],
  ["dark warning", "#ff9f0a", "#000000", 3.0],
  ["dark danger", "#ff453a", "#000000", 3.0],
  ["dark purple", "#bf5af2", "#000000", 3.0],
];

let fail = 0;
for (const [name, fg, bg, min] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  console.log(`${ok ? "PASS" : "FAIL"} ${name}: ${fg} on ${bg} = ${r.toFixed(2)}:1 (min ${min})`);
  if (!ok) fail++;
}
if (fail > 0) {
  console.error(`contrast check failed (${fail})`);
  process.exit(1);
}
console.log("contrast check ok");
