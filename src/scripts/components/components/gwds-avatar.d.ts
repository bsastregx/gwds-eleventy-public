import type { Components, JSX } from "../types/components";

interface GwdsAvatar extends Components.GwdsAvatar, HTMLElement {}
export const GwdsAvatar: {
  prototype: GwdsAvatar;
  new (): GwdsAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
