import type { Components, JSX } from "../types/components";

interface GwdsTooltip extends Components.GwdsTooltip, HTMLElement {}
export const GwdsTooltip: {
  prototype: GwdsTooltip;
  new (): GwdsTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
