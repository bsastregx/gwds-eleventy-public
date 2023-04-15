import type { Components, JSX } from "../types/components";

interface GwdsFormInput extends Components.GwdsFormInput, HTMLElement {}
export const GwdsFormInput: {
  prototype: GwdsFormInput;
  new (): GwdsFormInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
