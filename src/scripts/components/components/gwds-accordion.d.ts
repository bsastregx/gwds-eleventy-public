import type { Components, JSX } from "../types/components";

interface GwdsAccordion extends Components.GwdsAccordion, HTMLElement {}
export const GwdsAccordion: {
  prototype: GwdsAccordion;
  new (): GwdsAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
