import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsGridCss = ":host{display:block}.gwds-grid{display:block;}.gwds-grid__container{display:grid;gap:var(--gwds__space--m)}.gwds-grid__container--2{grid-template-columns:repeat(1, 1fr)}.gwds-grid__container--3{grid-template-columns:repeat(1, 1fr)}.gwds-grid__container--4{grid-template-columns:repeat(1, 1fr)}.gwds-grid__container--6{grid-template-columns:repeat(2, 1fr)}@media (min-width: 768px){.gwds-grid__container--2{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--3{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--4{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--6{grid-template-columns:repeat(4, 1fr)}}@media (min-width: 1200px){.gwds-grid__container--2{grid-template-columns:repeat(2, 1fr)}.gwds-grid__container--3{grid-template-columns:repeat(3, 1fr)}.gwds-grid__container--4{grid-template-columns:repeat(4, 1fr);gap:var(--gwds__space--s)}.gwds-grid__container--6{grid-template-columns:repeat(6, 1fr)}}";

const GwdsGrid = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.perRow = '3';
    this.gap = 's';
  }
  render() {
    return (h(Host, { class: { 'gwds-grid': true } }, h("div", { class: {
        'gwds-grid__container': true,
        'gwds-grid__container--2': this.perRow === '2',
        'gwds-grid__container--3': this.perRow === '3',
        'gwds-grid__container--4': this.perRow === '4',
        'gwds-grid__container--6': this.perRow === '6',
      }, style: { gap: `var(--gwds__space--${this.gap})` } }, h("slot", null))));
  }
  static get style() { return gwdsGridCss; }
}, [4, "gwds-grid", {
    "perRow": [1, "per-row"],
    "gap": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-grid"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-grid":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsGrid);
      }
      break;
  } });
}

export { GwdsGrid as G, defineCustomElement as d };
