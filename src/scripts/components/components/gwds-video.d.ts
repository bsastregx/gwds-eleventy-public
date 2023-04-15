import type { Components, JSX } from "../types/components";

interface GwdsVideo extends Components.GwdsVideo, HTMLElement {}
export const GwdsVideo: {
  prototype: GwdsVideo;
  new (): GwdsVideo;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
