/**
 * atnetto.tech — design tokens
 * Centralized to keep colors consistent and make global tweaks cheap.
 */

export const colors = {
  // Dark bands (default / current identity)
  dark: {
    bg: "#0B0A08",
    bgAlt: "#090908",
    panel: "#0E0C09",
    panel2: "#15110c",
    border: "rgba(242,166,0,0.12)",
    borderStrong: "rgba(242,166,0,0.22)",
    text: "#F5F5F5",
    textMuted: "#94A3B8",
    textDim: "#64748b",
  },

  // Light bands (new — alternating section backgrounds)
  light: {
    bg: "#F3F1EC",
    bg2: "#EDEAE2",
    surface: "#FFFFFF",
    border: "rgba(0,0,0,0.06)",
    borderStrong: "rgba(0,0,0,0.10)",
    text: "#1A1815",
    textMuted: "#5C5852",
    textDim: "#8A857D",
  },

  // Brand accent (shared — same on light and dark)
  brand: {
    orange: "#F2A600",
    amber: "#FFB300",
    contrast: "#090908", // text on orange CTA
  },
} as const;

export const motionEase = [0.16, 1, 0.3, 1] as const;
