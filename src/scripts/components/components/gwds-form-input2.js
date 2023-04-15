import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsFormInputCss = ":host{display:block}.gwds-form-input{display:block}.gwds-form-input input{width:100%;padding-left:var(--gwds__space--xs);padding-right:var(--gwds__space--xs)}";

const GwdsFormInput = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.placeholder = null;
    this.minWidth = '250px';
    this.maxWidth = '100%';
  }
  render() {
    return (h(Host, { class: "gwds-form-input" }, h("input", { type: "text", placeholder: this.placeholder, style: { minWidth: this.minWidth, maxWidth: this.maxWidth } })));
  }
  static get style() { return gwdsFormInputCss; }
}, [0, "gwds-form-input", {
    "placeholder": [1],
    "minWidth": [1, "min-width"],
    "maxWidth": [1, "max-width"]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-form-input"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-form-input":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsFormInput);
      }
      break;
  } });
}

export { GwdsFormInput as G, defineCustomElement as d };
