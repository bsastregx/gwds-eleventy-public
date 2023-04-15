import type { Components, JSX } from "../types/components";

interface GwdsAccordionItem extends Components.GwdsAccordionItem, HTMLElement {}
export const GwdsAccordionItem: {
  prototype: GwdsAccordionItem;
  new (): GwdsAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
