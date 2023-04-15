import type { Components, JSX } from "../types/components";

interface GwdsStack extends Components.GwdsStack, HTMLElement {}
export const GwdsStack: {
  prototype: GwdsStack;
  new (): GwdsStack;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
