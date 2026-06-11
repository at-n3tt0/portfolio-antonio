import type { Transition } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const revealViewport = { once: true, margin: "-80px" } as const;

export const revealTransition = (delay = 0): Transition => ({
  duration: 0.55,
  delay,
  ease: easeOut,
});

export const reducedTransition: Transition = { duration: 0 };

export function revealInitial(reduced: boolean) {
  return reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
}

export function revealAnimate(reduced: boolean) {
  return reduced ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
}

export function hoverLift(reduced: boolean, light = false) {
  return reduced
    ? {}
    : {
        y: -4,
        borderColor: light ? "rgba(0,0,0,0.13)" : "rgba(242,166,0,0.24)",
        boxShadow: light
          ? "0 18px 45px -28px rgba(0,0,0,0.32), 0 10px 24px -18px rgba(0,0,0,0.18)"
          : "0 18px 45px -28px rgba(242,166,0,0.36), 0 10px 24px -18px rgba(0,0,0,0.55)",
      };
}
