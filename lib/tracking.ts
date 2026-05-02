"use client";

type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: TrackingPayload[];
  }
}

export function trackEvent(event: string, payload: TrackingPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...payload });
}

export function whatsappUrl(message: string) {
  return `https://wa.me/5591980242234?text=${encodeURIComponent(message)}`;
}
