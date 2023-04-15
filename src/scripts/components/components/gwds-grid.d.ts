import type { Components, JSX } from "../types/components";

interface GwdsGrid extends Components.GwdsGrid, HTMLElement {}
export const GwdsGrid: {
  prototype: GwdsGrid;
  new (): GwdsGrid;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
