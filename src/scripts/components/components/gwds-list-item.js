import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsListItemCss = ":host{display:block}.gwds-list-item{display:flex;align-items:flex-start;margin-bottom:var(--gwds__space--m)}.gwds-list-item__icon{flex-grow:0;flex-shrink:0;flex-basis:60px;margin-right:var(--gwds__space--m)}";

const GwdsListItem$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.iconUrl = null;
    this.iconAlt = null;
  }
  render() {
    return (h(Host, { class: {
        'gwds-list-item': true,
      } }, this.iconUrl ? h("img", { class: "gwds-list-item__icon", src: this.iconUrl, alt: this.iconAlt }) : null, h("slot", null)));
  }
  static get style() { return gwdsListItemCss; }
}, [4, "gwds-list-item", {
    "iconUrl": [1, "icon-url"],
    "iconAlt": [1, "icon-alt"]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-list-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-list-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsListItem$1);
      }
      break;
  } });
}

const GwdsListItem = GwdsListItem$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsListItem, defineCustomElement };
