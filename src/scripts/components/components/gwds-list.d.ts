import type { Components, JSX } from "../types/components";

interface GwdsList extends Components.GwdsList, HTMLElement {}
export const GwdsList: {
  prototype: GwdsList;
  new (): GwdsList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
