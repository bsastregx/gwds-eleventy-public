import type { Components, JSX } from "../types/components";

interface GwdsListItem extends Components.GwdsListItem, HTMLElement {}
export const GwdsListItem: {
  prototype: GwdsListItem;
  new (): GwdsListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
