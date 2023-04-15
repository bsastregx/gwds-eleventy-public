import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';

const gwdsTagCss = ":host{display:block}.gwds-tag{display:block;margin-bottom:var(--gwds__space--xs)}.gwds-tag__span{font-size:var(--gwds__font-size--s);padding:var(--gwds__space--xxs) var(--gwds__space--xs);border-radius:var(--gwds__radius--xxs);overflow:hidden}";

const GwdsTag = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.label = null;
    this.bgColor = 'violet-50';
    this.url = null;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: { 'gwds-tag': true } }, h("small", { class: { 'gwds-tag__span': true }, style: { backgroundColor: `var(--gwds__color--${this.bgColor})`, color: `var(${this.textColor})` } }, this.label)));
  }
  static get style() { return gwdsTagCss; }
}, [0, "gwds-tag", {
    "label": [1],
    "bgColor": [1, "bg-color"],
    "url": [1],
    "textColor": [32]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-tag"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-tag":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsTag);
      }
      break;
  } });
}

export { GwdsTag as G, defineCustomElement as d };
