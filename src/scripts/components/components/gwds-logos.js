import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gwds-grid2.js';

const gwdsLogosCss = ":host{display:block}";

const GwdsLogos$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.mainTitle = null;
  }
  render() {
    return (h(Host, { class: { 'gwds-logos': true } }, h("div", { class: "container" }, this.mainTitle ? h("h3", { class: "h5" }, this.mainTitle) : null, h("gwds-grid", { perRow: "6" }, h("slot", null)))));
  }
  static get style() { return gwdsLogosCss; }
}, [4, "gwds-logos", {
    "mainTitle": [1, "main-title"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-logos", "gwds-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-logos":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsLogos$1);
      }
      break;
    case "gwds-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GwdsLogos = GwdsLogos$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsLogos, defineCustomElement };
