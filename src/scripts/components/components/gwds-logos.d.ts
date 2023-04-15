import type { Components, JSX } from "../types/components";

interface GwdsLogos extends Components.GwdsLogos, HTMLElement {}
export const GwdsLogos: {
  prototype: GwdsLogos;
  new (): GwdsLogos;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
