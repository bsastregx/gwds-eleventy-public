import { r as registerInstance, h, e as Host, g as getElement } from './index-bf16d04e.js';

const iconContent = new Map();
const requests = new Map();
function getSvgContent(url) {
  // see if we already have a request for this url
  let request = requests.get(url);
  if (!request) {
    // we don't already have a request
    request = fetch(url).then(response => {
      if (response.ok) {
        return response.text().then(svgContent => {
          iconContent.set(url, svgContent);
          return svgContent;
        });
      }
      iconContent.set(url, '');
    });
    // cache for the same requests
    requests.set(url, request);
  }
  return request;
}

const gwdsIconCss = ".gwds-icon{display:inline-block;line-height:0}.gwds-icon__div{display:inline-block;line-height:0}.gwds-icon__div svg{width:100%;height:100%;fill:var(--gwds__icon-color)}";

const GwdsIcon = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /**
     * The color of the icon.
     */
    this.color = null;
    /**
     * If enabled, the icon will be loaded lazily when it's visible in the viewport.
     */
    this.lazy = false;
    /**
     * The size of the icon. Possible values: small, medium, large.
     */
    this.size = 's';
    /**
     * The URL of the icon.
     */
    this.src = '';
    this.isVisible = false;
  }
  connectedCallback() {
    // purposely do not return the promise here because loading
    // the svg file should not hold up loading the app
    // only load the svg if it's visible
    this.waitUntilVisible(this.element, '50px', () => {
      this.isVisible = true;
      this.getIcon();
    });
  }
  componentWillLoad() {
    if (this.color === null) {
      //If color is not defined, set color equal to inherited color
      this.color = window.getComputedStyle(this.element, null).getPropertyValue('color');
    }
  }
  disconnectedCallback() {
    if (this.io !== undefined) {
      this.io.disconnect();
      this.io = undefined;
    }
  }
  waitUntilVisible(el, rootMargin, callback) {
    if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
      const io = (this.io = new window.IntersectionObserver((data) => {
        if (data[0].isIntersecting) {
          io.disconnect();
          this.io = undefined;
          callback();
        }
      }, { rootMargin }));
      io.observe(el);
    }
    else {
      // browser doesn't support IntersectionObserver
      // so just fallback to always show it
      callback();
    }
  }
  async getIcon() {
    if (this.isVisible) {
      if (this.src) {
        if (iconContent.has(this.src)) {
          this.svgContent = iconContent.get(this.src);
        }
        else {
          this.svgContent = await getSvgContent(this.src);
        }
      }
      else {
        this.svgContent = '';
        return;
      }
    }
  }
  render() {
    return (h(Host, { class: "gwds-icon" }, h("div", { class: "gwds-icon__div", style: { 'width': `var(--gwds__icon-size--${this.size}, )`, 'height': `var(--gwds__icon-size--${this.size}, )`, '--gwds__icon-color': this.color }, innerHTML: this.svgContent })));
  }
  static get assetsDirs() { return ["icon-assets"]; }
  get element() { return getElement(this); }
  static get watchers() { return {
    "src": ["getIcon"]
  }; }
};
GwdsIcon.style = gwdsIconCss;

export { GwdsIcon as gwds_icon };
