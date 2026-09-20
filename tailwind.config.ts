/* Tailwind theme maps 1:1 to semantic CSS vars (styles/tokens.css).
 * rgb(var(--rgb-x) / <alpha-value>) keeps opacity modifiers (text-ink/70)
 * working in BOTH light and dark appearances with zero component edits.
 * Type scale = iOS text styles (HIG typography.md): body 17 default / 11 min. */
const v = (n: string) => `rgb(var(--rgb-${n}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: {
        ink: v("label"),
        canvas: v("bg"),
        parchment: v("grouped"),
        pearl: v("pearl"),
        tile1: v("tile-1"),
        tile2: v("tile-2"),
        tile3: v("tile-3"),
        black: v("black"),
        action: v("action"),
        focus: v("focus"),
        sky: v("sky"),
        mutedstrong: v("label-strong"),
        muted: v("label-2"),
        muteddark: v("label-2-dark"),
        hairline: v("separator"),
        chip: v("chip"),
      },
      fontFamily: {
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          '"SF Arabic"',
          "var(--font-inter)",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        text: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          '"SF Arabic"',
          "var(--font-inter)",
          "Inter",
          "system-ui",
          '"Segoe UI"',
          "sans-serif",
        ],
      },
      fontSize: {
        hero: ["56px", { lineHeight: "1.07", letterSpacing: "-0.28px", fontWeight: "600" }],
        dlg: ["40px", { lineHeight: "1.1", letterSpacing: "-0.2px", fontWeight: "600" }],
        lead: ["28px", { lineHeight: "1.25", fontWeight: "400" }],
        /* iOS text styles — ready for SaaS screens */
        title1: ["28px", { lineHeight: "34px", fontWeight: "700" }],
        title2: ["22px", { lineHeight: "28px", fontWeight: "700" }],
        headline: ["17px", { lineHeight: "22px", fontWeight: "600" }],
        callout: ["16px", { lineHeight: "21px", fontWeight: "400" }],
        subhead: ["15px", { lineHeight: "20px", fontWeight: "400" }],
        footnote: ["13px", { lineHeight: "18px", fontWeight: "400" }],
        caption1: ["12px", { lineHeight: "16px", fontWeight: "400" }],
        caption2: ["11px", { lineHeight: "13px", fontWeight: "400" }],
      },
      borderRadius: {
        util: "8px",
        card: "18px",
      },
      boxShadow: {
        img: "3px 5px 30px rgba(0,0,0,0.22)",
      },
      maxWidth: {
        prose980: "980px",
        grid1440: "1440px",
      },
    },
  },
  plugins: [],
};
