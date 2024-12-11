import { cubicOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/transition";

export function load(node: Element, params: { delay?: number; duration?: number; easing?: (t: number) => number }): TransitionConfig {
  const { delay = 0, duration = 600, easing = cubicOut } = params;
  const p = parseFloat(
    getComputedStyle(node).getPropertyValue("stroke-dashoffset"),
  );
  const c = parseFloat(
    getComputedStyle(node).getPropertyValue("stroke-dasharray"),
  );
  return {
    delay,
    duration,
    easing,
    css: (t) => `stroke-dashoffset: ${c + t * (p - c)};`,
  };
}
