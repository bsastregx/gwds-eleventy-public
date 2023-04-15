import type { Components, JSX } from "../types/components";

interface Live2022SearchBox extends Components.Live2022SearchBox, HTMLElement {}
export const Live2022SearchBox: {
  prototype: Live2022SearchBox;
  new (): Live2022SearchBox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
