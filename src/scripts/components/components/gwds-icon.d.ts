import type { Components, JSX } from "../types/components";

interface GwdsIcon extends Components.GwdsIcon, HTMLElement {}
export const GwdsIcon: {
  prototype: GwdsIcon;
  new (): GwdsIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
