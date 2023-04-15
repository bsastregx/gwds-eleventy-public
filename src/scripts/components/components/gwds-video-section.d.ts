import type { Components, JSX } from "../types/components";

interface GwdsVideoSection extends Components.GwdsVideoSection, HTMLElement {}
export const GwdsVideoSection: {
  prototype: GwdsVideoSection;
  new (): GwdsVideoSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
