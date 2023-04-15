import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsGradientTitleCss = ":host{display:block}.gwds-gradient-title{display:block}.gwds-gradient-title .title{-webkit-background-clip:text !important;-moz-background-clip:text !important;-webkit-text-fill-color:transparent;-moz-text-fill-color:transparent;line-height:1.5em;display:inline-block;font-size:64px;letter-spacing:-0.05em;margin:0}";

const GwdsGradientTitle$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.from = 'red-200';
    this.to = 'red-400';
    this.center = false;
  }
  render() {
    return (h(Host, { class: { 'gwds-gradient-title': true, 'h1': true } }, h("div", { class: { container: true, tac: this.center } }, h("h2", { class: { h1: true, title: true, tac: this.center }, style: { background: `-webkit-linear-gradient(45deg, var(--gwds__color--${this.from}), var(--gwds__color--${this.to}))` } }, h("slot", null)))));
  }
  static get style() { return gwdsGradientTitleCss; }
}, [4, "gwds-gradient-title", {
    "from": [1],
    "to": [1],
    "center": [4]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-gradient-title"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-gradient-title":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsGradientTitle$1);
      }
      break;
  } });
}

const GwdsGradientTitle = GwdsGradientTitle$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsGradientTitle, defineCustomElement };
