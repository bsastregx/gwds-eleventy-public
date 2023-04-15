import type { Components, JSX } from "../types/components";

interface GwdsGoodNews extends Components.GwdsGoodNews, HTMLElement {}
export const GwdsGoodNews: {
  prototype: GwdsGoodNews;
  new (): GwdsGoodNews;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
