import type { Components, JSX } from "../types/components";

interface GwdsComponentTitle extends Components.GwdsComponentTitle, HTMLElement {}
export const GwdsComponentTitle: {
  prototype: GwdsComponentTitle;
  new (): GwdsComponentTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
