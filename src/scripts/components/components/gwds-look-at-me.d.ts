import type { Components, JSX } from "../types/components";

interface GwdsLookAtMe extends Components.GwdsLookAtMe, HTMLElement {}
export const GwdsLookAtMe: {
  prototype: GwdsLookAtMe;
  new (): GwdsLookAtMe;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
