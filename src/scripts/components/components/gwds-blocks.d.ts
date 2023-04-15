import type { Components, JSX } from "../types/components";

interface GwdsBlocks extends Components.GwdsBlocks, HTMLElement {}
export const GwdsBlocks: {
  prototype: GwdsBlocks;
  new (): GwdsBlocks;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
