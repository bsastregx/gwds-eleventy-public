import type { Components, JSX } from "../types/components";

interface GwdsBreadcrumbs extends Components.GwdsBreadcrumbs, HTMLElement {}
export const GwdsBreadcrumbs: {
  prototype: GwdsBreadcrumbs;
  new (): GwdsBreadcrumbs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
