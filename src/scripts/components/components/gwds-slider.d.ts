import type { Components, JSX } from "../types/components";

interface GwdsSlider extends Components.GwdsSlider, HTMLElement {}
export const GwdsSlider: {
  prototype: GwdsSlider;
  new (): GwdsSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
