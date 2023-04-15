import type { Components, JSX } from "../types/components";

interface GwdsQuote extends Components.GwdsQuote, HTMLElement {}
export const GwdsQuote: {
  prototype: GwdsQuote;
  new (): GwdsQuote;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
