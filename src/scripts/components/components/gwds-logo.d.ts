import type { Components, JSX } from "../types/components";

interface GwdsLogo extends Components.GwdsLogo, HTMLElement {}
export const GwdsLogo: {
  prototype: GwdsLogo;
  new (): GwdsLogo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
