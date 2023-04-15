import type { Components, JSX } from "../types/components";

interface GwdsCard extends Components.GwdsCard, HTMLElement {}
export const GwdsCard: {
  prototype: GwdsCard;
  new (): GwdsCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
