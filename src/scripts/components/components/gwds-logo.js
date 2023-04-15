import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsLogoCss = ":host{display:block}.gwds-logo__anchor{width:100%;height:100%;position:absolute;top:0;left:0;background-color:var(--gwds__color--black);border-radius:var(--gwds__radius--s);opacity:0.075;transition:opacity var(--gwds__transition--fast)}.gwds-logo__anchor:hover{opacity:0}.gwds-logo__container{position:relative;background-color:var(--gwds__color--dark-200);color:var(--gwds__color--dark-800);text-align:center;padding:var(--gwds__space--m);height:100%;box-sizing:border-box;flex-direction:column;display:flex;align-items:center;justify-content:space-between;border-radius:var(--gwds__radius--s)}.gwds-logo__image{width:100%;margin-bottom:var(--gwds__space--s)}.gwds-logo__label{margin:0 !important}";

const GwdsLogo$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.name = null;
    this.imgSrc = null;
    this.imgAlt = null;
    this.label = null;
    this.size = '32px';
    this.linkUrl = null;
  }
  render() {
    return (h(Host, { class: { 'gwds-logo': true } }, h("article", { class: { 'gwds-logo__container': true } }, this.linkUrl ? h("a", { class: { 'gwds-logo__anchor': true }, href: this.linkUrl, target: "_blank" }) : null, h("img", { style: {
        width: this.size,
      }, class: { 'gwds-logo__image': true }, src: this.imgSrc, alt: this.imgAlt, loading: "lazy" }), this.label ? h("h1", { class: { 'gwds-logo__label h5': true } }, this.label) : null)));
  }
  static get style() { return gwdsLogoCss; }
}, [0, "gwds-logo", {
    "name": [1],
    "imgSrc": [1, "img-src"],
    "imgAlt": [1, "img-alt"],
    "label": [1],
    "size": [1],
    "linkUrl": [1, "link-url"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-logo"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-logo":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsLogo$1);
      }
      break;
  } });
}

const GwdsLogo = GwdsLogo$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsLogo, defineCustomElement };
