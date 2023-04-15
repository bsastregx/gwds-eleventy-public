import type { Components, JSX } from "../types/components";

interface Live2022Card extends Components.Live2022Card, HTMLElement {}
export const Live2022Card: {
  prototype: Live2022Card;
  new (): Live2022Card;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
