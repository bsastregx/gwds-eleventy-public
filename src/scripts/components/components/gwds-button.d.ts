import type { Components, JSX } from "../types/components";

interface GwdsButton extends Components.GwdsButton, HTMLElement {}
export const GwdsButton: {
  prototype: GwdsButton;
  new (): GwdsButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
