import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsVideoLiteCss = ".gwds-video-lite{background-color:white;position:relative;display:block;contain:content;background-position:center center;background-size:cover;cursor:pointer;width:100%;}.gwds-video-lite::before{content:\"\";display:block;position:absolute;top:0;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);background-position:top;background-repeat:repeat-x;height:60px;padding-bottom:50px;width:100%;transition:all 0.2s cubic-bezier(0, 0, 0.2, 1)}.gwds-video-lite::after{content:\"\";display:block;padding-bottom:56.25%}.gwds-video-lite>iframe{width:100%;height:100%;position:absolute;top:0;left:0;border:0}.gwds-video-lite__button{display:block;width:68px;height:48px;position:absolute;cursor:pointer;transform:translate3d(-50%, -50%, 0);top:50%;left:50%;z-index:1;background-color:transparent;background-image:url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 68 48\"><path d=\"M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z\" fill=\"red\"/><path d=\"M45 24 27 14v20\" fill=\"white\"/></svg>');filter:grayscale(100%);transition:filter 0.1s cubic-bezier(0, 0, 0.2, 1);border:none}.gwds-video-lite:hover>.gwds-video-lite__button,.gwds-video-lite .gwds-video-lite__button:focus{filter:none}.gwds-video-lite--activated{cursor:unset}.gwds-video-lite--activated::before,.gwds-video-lite--activated>.gwds-video-lite__button{opacity:0;pointer-events:none}.gwds-video-lite__play-label{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}";

const GwdsVideoLite = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.videoId = null;
    this.maxWidth = '100%';
    this.poster = null;
    this.playLabel = 'Play';
    this.params = '';
    this.activated = false;
    this.preconnected = false;
    this.needsYTApiForAutoplay = false;
  }
  componentWillLoad() {
    // On hover (or tap), warm up the TCP connections we're (likely) about to use.
    this.el.addEventListener('pointerover', this.warmConnections.bind(this), {
      once: true,
    });
    // Once the user clicks, add the real iframe and drop our play button
    // TODO: In the future we could be like amp-youtube and silently swap in the iframe during idle time
    //   We'd want to only do this for in-viewport or near-viewport ones: https://github.com/ampproject/amphtml/pull/5003
    this.el.addEventListener('click', this.addIframe.bind(this));
    // Chrome & Edge desktop have no problem with the basic YouTube Embed with ?autoplay=1
    // However Safari desktop and most/all mobile browsers do not successfully track the user gesture of clicking through the creation/loading of the iframe,
    // so they don't autoplay automatically. Instead we must load an additional 2 sequential JS files (1KB + 165KB) (un-br) for the YT Player API
    // TODO: Try loading the the YT API in parallel with our iframe and then attaching/playing it. #82
    this.needsYTApiForAutoplay = navigator.vendor.includes('Apple') || navigator.userAgent.includes('Mobi');
  }
  /**
   * Add a <link rel={preload | preconnect} ...> to the head
   */
  addPrefetch(kind, url, as = undefined) {
    const linkEl = document.createElement('link');
    linkEl.rel = kind;
    linkEl.href = url;
    if (as) {
      linkEl.as = as;
    }
    document.head.append(linkEl);
  }
  /**
   * Begin pre-connecting to warm up the iframe load
   * Since the embed's network requests load within its iframe,
   *   preload/prefetch'ing them outside the iframe will only cause double-downloads.
   * So, the best we can do is warm up a few connections to origins that are in the critical path.
   *
   * Maybe `<link rel=preload as=document>` would work, but it's unsupported: http://crbug.com/593267
   * But TBH, I don't think it'll happen soon with Site Isolation and split caches adding serious complexity.
   */
  warmConnections() {
    if (this.preconnected)
      return;
    // The iframe document and most of its subresources come right off youtube.com
    this.addPrefetch('preconnect', 'https://www.youtube-nocookie.com');
    // The botguard script is fetched off from google.com
    this.addPrefetch('preconnect', 'https://www.google.com');
    // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
    this.addPrefetch('preconnect', 'https://googleads.g.doubleclick.net');
    this.addPrefetch('preconnect', 'https://static.doubleclick.net');
    this.preconnected = true;
  }
  fetchYTPlayerApi() {
    if (window['YT'] || (window['YT'] && window['YT'].Player))
      return;
    this.ytApiPromise = new Promise((res, rej) => {
      var el = document.createElement('script');
      el.src = 'https://www.youtube.com/iframe_api';
      el.async = true;
      el.onload = _ => {
        window['YT'].ready(res);
      };
      el.onerror = rej;
      this.el.append(el);
      console.log('this', this);
    });
  }
  async addYTPlayerIframe(params) {
    this.fetchYTPlayerApi();
    await this.ytApiPromise;
    const videoPlaceholderEl = document.createElement('div');
    this.el.append(videoPlaceholderEl);
    const paramsObj = Object.fromEntries(params.entries());
    new window['YT'].Player(videoPlaceholderEl, {
      width: '100%',
      videoId: this.videoId,
      playerVars: paramsObj,
      events: {
        onReady: event => {
          event.target.playVideo();
        },
      },
    });
  }
  async addIframe() {
    if (this.activated)
      return;
    this.activated = true;
    const params = new URLSearchParams(this.params || []);
    params.append('autoplay', '1');
    params.append('playsinline', '1');
    params.append('rel', '0');
    params.append('showinfo', '0');
    params.append('modestbranding', '1');
    if (this.needsYTApiForAutoplay) {
      return this.addYTPlayerIframe(params);
    }
    const iframeEl = document.createElement('iframe');
    iframeEl.width = '560';
    iframeEl.height = '315';
    // No encoding necessary as [title] is safe. https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#:~:text=Safe%20HTML%20Attributes%20include
    iframeEl.title = this.playLabel;
    iframeEl.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframeEl.allowFullscreen = true;
    // AFAIK, the encoding here isn't necessary for XSS, but we'll do it only because this is a URL
    // https://stackoverflow.com/q/64959723/89484
    iframeEl.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(this.videoId)}?${params.toString()}`;
    this.el.append(iframeEl);
    // Set focus for a11y
    iframeEl.focus();
  }
  render() {
    return (h(Host, { class: { 'gwds-video-lite': true, 'gwds-video-lite--activated': this.activated }, style: { maxWidth: this.maxWidth, backgroundImage: `url(${this.poster})` } }, h("button", { type: "button", class: "gwds-video-lite__button" }, h("span", { class: "gwds-video-lite__play-label" }, this.playLabel))));
  }
  get el() { return this; }
  static get style() { return gwdsVideoLiteCss; }
}, [0, "gwds-video-lite", {
    "videoId": [1, "video-id"],
    "maxWidth": [1, "max-width"],
    "poster": [1],
    "playLabel": [1, "play-label"],
    "params": [1],
    "activated": [32],
    "preconnected": [32],
    "needsYTApiForAutoplay": [32],
    "ytApiPromise": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-video-lite"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-video-lite":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsVideoLite);
      }
      break;
  } });
}

export { GwdsVideoLite as G, defineCustomElement as d };
