/* gwds custom elements */
export { GwdsAccordion as GwdsAccordion } from '../types/components/gwds-accordion/gwds-accordion';
export { GwdsAccordionItem as GwdsAccordionItem } from '../types/components/gwds-accordion-item/gwds-accordion-item';
export { GwdsAvatar as GwdsAvatar } from '../types/components/gwds-avatar/gwds-avatar';
export { GwdsBlocks as GwdsBlocks } from '../types/components/gwds-blocks/gwds-blocks';
export { GwdsBreadcrumbs as GwdsBreadcrumbs } from '../types/components/gwds-breadcrumbs/gwds-breadcrumbs';
export { GwButton as GwdsButton } from '../types/components/gwds-button/gwds-button';
export { GwdsCard as GwdsCard } from '../types/components/gwds-card/gwds-card';
export { GwdsComponentTitle as GwdsComponentTitle } from '../types/components/gwds-component-title/gwds-component-title';
export { GwdsFormInput as GwdsFormInput } from '../types/components/gwds-form-input/gwds-form-input';
export { GwdsGoodNews as GwdsGoodNews } from '../types/components/gwds-good-news/gwds-good-news';
export { GwdsGoodNewsSection as GwdsGoodNewsSection } from '../types/components/gwds-good-news-section/gwds-good-news-section';
export { GwdsGradientTitle as GwdsGradientTitle } from '../types/components/gwds-gradient-title/gwds-gradient-title';
export { GwdsGrid as GwdsGrid } from '../types/components/gwds-grid/gwds-grid';
export { GwdsIcon as GwdsIcon } from '../types/components/gwds-icon/gwds-icon';
export { GwdsLanguageSwitcher as GwdsLanguageSwitcher } from '../types/components/gwds-language-switcher/gwds-language-switcher';
export { GwdsLearnMore as GwdsLearnMore } from '../types/components/gwds-learn-more/gwds-learn-more';
export { GwdsList as GwdsList } from '../types/components/gwds-list/gwds-list';
export { GwdsListItem as GwdsListItem } from '../types/components/gwds-list-item/gwds-list-item';
export { GwdsLogo as GwdsLogo } from '../types/components/gwds-logo/gwds-logo';
export { GwdsLogos as GwdsLogos } from '../types/components/gwds-logos/gwds-logos';
export { GwLookAtMe as GwdsLookAtMe } from '../types/components/gwds-look-at-me/gwds-look-at-me';
export { GwdsMessage as GwdsMessage } from '../types/components/gwds-message/gwds-message';
export { GwdsQuote as GwdsQuote } from '../types/components/gwds-quote/gwds-quote';
export { GwShowAndTell as GwdsShowAndTell } from '../types/components/gwds-show-and-tell/gwds-show-and-tell';
export { GwdsSlider as GwdsSlider } from '../types/components/gwds-slider/gwds-slider';
export { GwdsStack as GwdsStack } from '../types/components/gwds-stack/gwds-stack';
export { GwdsStack2 as GwdsStack2 } from '../types/components/gwds-stack-2/gwds-stack-2';
export { GwdsStackItem as GwdsStackItem } from '../types/components/gwds-stack-item/gwds-stack-item';
export { GwdsTag as GwdsTag } from '../types/components/gwds-tag/gwds-tag';
export { GwdsTooltip as GwdsTooltip } from '../types/components/gwds-tooltip/gwds-tooltip';
export { GwdsVideo as GwdsVideo } from '../types/components/gwds-video/gwds-video';
export { GwdsVideoLite as GwdsVideoLite } from '../types/components/gwds-video-lite/gwds-video-lite';
export { GwdsVideoSection as GwdsVideoSection } from '../types/components/gwds-video-section/gwds-video-section';
export { Live2022Card as Live2022Card } from '../types/components/live-2022-card/live-2022-card';
export { Live2022SearchBox as Live2022SearchBox } from '../types/components/live-2022-search-box/live-2022-search-box';

/**
 * Used to manually set the base path where assets can be found.
 * If the script is used as "module", it's recommended to use "import.meta.url",
 * such as "setAssetPath(import.meta.url)". Other options include
 * "setAssetPath(document.currentScript.src)", or using a bundler's replace plugin to
 * dynamically set the path at build time, such as "setAssetPath(process.env.ASSET_PATH)".
 * But do note that this configuration depends on how your script is bundled, or lack of
 * bundling, and where your assets can be loaded from. Additionally custom bundling
 * will have to ensure the static assets are copied to its build directory.
 */
export declare const setAssetPath: (path: string) => void;

export interface SetPlatformOptions {
  raf?: (c: FrameRequestCallback) => number;
  ael?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
  rel?: (el: EventTarget, eventName: string, listener: EventListenerOrEventListenerObject, options: boolean | AddEventListenerOptions) => void;
}
export declare const setPlatformOptions: (opts: SetPlatformOptions) => void;
export * from '../types';
