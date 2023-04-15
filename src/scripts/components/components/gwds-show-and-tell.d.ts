import type { Components, JSX } from "../types/components";

interface GwdsShowAndTell extends Components.GwdsShowAndTell, HTMLElement {}
export const GwdsShowAndTell: {
  prototype: GwdsShowAndTell;
  new (): GwdsShowAndTell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
