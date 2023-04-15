export declare class GwdsVideoLite {
  el: HTMLElement;
  videoId: string;
  maxWidth: string;
  poster: string;
  playLabel: string;
  params: string;
  activated: boolean;
  preconnected: boolean;
  needsYTApiForAutoplay: boolean;
  ytApiPromise: Promise<any>;
  componentWillLoad(): void;
  /**
   * Add a <link rel={preload | preconnect} ...> to the head
   */
  addPrefetch(kind: any, url: any, as?: any): void;
  /**
   * Begin pre-connecting to warm up the iframe load
   * Since the embed's network requests load within its iframe,
   *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
   * So, the best we can do is warm up a few connections to origins that are in the critical path.
   *
   * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
   * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
   */
  warmConnections(): void;
  fetchYTPlayerApi(): void;
  addYTPlayerIframe(params: any): Promise<void>;
  addIframe(): Promise<void>;
  render(): any;
}
