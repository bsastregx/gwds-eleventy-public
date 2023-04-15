import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './gwds-button2.js';

const gwdsStackItemCss = ".gwds-stack-item{display:none}.gwds-stack-item__icon{display:inline-block;margin-right:var(--gwds__space--s)}.gwds-stack-item__title{display:flex;align-items:center}.gwds-stack-item__button{margin-top:var(--gwds__space--m);margin-bottom:0}.gwds-stack-item--visible{display:block}";

const GwdsStackItem = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.iconUrl = null;
    this.iconAlt = null;
    this.mainTitle = null;
    this.buttonLabel = null;
    this.buttonUrl = null;
    this.buttonBlank = false;
    this.visible = false;
  }
  render() {
    return (h(Host, { class: {
        'gwds-stack-item': true,
        'gwds-stack-item--visible': this.visible,
      } }, h("h2", { class: {
        'h3': true,
        'gwds-stack-item__title': true,
        'mt-0': true,
      } }, this.iconUrl ? h("img", { src: this.iconUrl, alt: this.iconAlt, class: "gwds-stack-item__icon" }) : null, this.mainTitle), h("slot", null), h("div", null, this.buttonLabel && this.buttonUrl ? h("gwds-button", { class: "gwds-stack-item__button", type: "secondary", url: this.buttonUrl, label: this.buttonLabel }) : null)));
  }
  static get style() { return gwdsStackItemCss; }
}, [4, "gwds-stack-item", {
    "iconUrl": [1, "icon-url"],
    "iconAlt": [1, "icon-alt"],
    "mainTitle": [1, "main-title"],
    "buttonLabel": [1, "button-label"],
    "buttonUrl": [1, "button-url"],
    "buttonBlank": [4, "button-blank"],
    "visible": [4]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-stack-item", "gwds-button"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-stack-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsStackItem);
      }
      break;
    case "gwds-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GwdsStackItem as G, defineCustomElement as d };
