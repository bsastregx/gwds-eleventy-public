export declare class GwdsIcon {
  private io?;
  element: HTMLElement;
  /**
   * The color of the icon.
   */
  color: string;
  /**
   * If enabled, the icon will be loaded lazily when it's visible in the viewport.
   */
  lazy: boolean;
  /**
   * The size of the icon. Possible values: small, medium, large.
   */
  size: Size;
  /**
   * The URL of the icon.
   */
  src: string;
  private isVisible;
  private svgContent?;
  connectedCallback(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
  private waitUntilVisible;
  private getIcon;
  render(): any;
}
export declare type Size = 'xs' | 's' | 'm';
