import type { Components, JSX } from "../types/components";

interface GwdsVideoLite extends Components.GwdsVideoLite, HTMLElement {}
export const GwdsVideoLite: {
  prototype: GwdsVideoLite;
  new (): GwdsVideoLite;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
