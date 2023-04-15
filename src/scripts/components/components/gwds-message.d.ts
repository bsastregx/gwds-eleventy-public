import type { Components, JSX } from "../types/components";

interface GwdsMessage extends Components.GwdsMessage, HTMLElement {}
export const GwdsMessage: {
  prototype: GwdsMessage;
  new (): GwdsMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
