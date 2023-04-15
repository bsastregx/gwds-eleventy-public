import type { Components, JSX } from "../types/components";

interface GwdsGoodNewsSection extends Components.GwdsGoodNewsSection, HTMLElement {}
export const GwdsGoodNewsSection: {
  prototype: GwdsGoodNewsSection;
  new (): GwdsGoodNewsSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
