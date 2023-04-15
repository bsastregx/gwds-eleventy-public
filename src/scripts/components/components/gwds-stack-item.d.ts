import type { Components, JSX } from "../types/components";

interface GwdsStackItem extends Components.GwdsStackItem, HTMLElement {}
export const GwdsStackItem: {
  prototype: GwdsStackItem;
  new (): GwdsStackItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
