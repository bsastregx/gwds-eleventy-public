import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';
import { d as defineCustomElement$2 } from './gwds-grid2.js';

const gwdsListCss = ".gwds-list__title{margin-bottom:var(--gwds__space--l) !important}.gwds-list__container{margin-bottom:calc(var(--gwds__space--m) * -1)}";

const GwdsList$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.mainTitle = null;
    this.description = null;
    this.bgColor = null;
    this.pt0 = false;
    this.pb0 = false;
    this.textColor = null;
    this.hasDescriptionSlot = false;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    this.hasDescriptionSlot = !!this.el.querySelector('[slot="description"]');
  }
  render() {
    return (h(Host, { class: {
        'gwds-list': true,
      } }, h("section", { class: { 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("div", { class: "gwds-list__container container" }, this.mainTitle ? h("h1", { class: "gwds-list__title h2 mt-0 tac" }, this.mainTitle) : null, h("slot", { name: "description" }), h("gwds-grid", { "per-row": "2" }, h("slot", null))))));
  }
  get el() { return this; }
  static get style() { return gwdsListCss; }
}, [4, "gwds-list", {
    "mainTitle": [1, "main-title"],
    "description": [1],
    "bgColor": [1, "bg-color"],
    "pt0": [4, "pt-0"],
    "pb0": [4, "pb-0"],
    "textColor": [32],
    "hasDescriptionSlot": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-list", "gwds-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-list":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsList$1);
      }
      break;
    case "gwds-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GwdsList = GwdsList$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsList, defineCustomElement };
