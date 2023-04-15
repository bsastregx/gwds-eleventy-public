import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const gwdsBreadcrumbsCss = ":host{display:block}.gwds-breadcrumbs .fa-greater-than{margin:0 var(--gwds__space--xs)}";

const GwdsBreadcrumbs$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.url = null;
    this.breadcrumbs = [];
  }
  componentWillLoad() {
    this.breadcrumbs = this.url.split('/').filter(part => part !== '');
  }
  generateBreadcrumbs() {
    const buffer = [];
    this.breadcrumbs.forEach((part, i) => {
      let item;
      if (i === 0 && (part === 'en' || part === 'es' || part === 'pt')) {
        item = (h("a", { href: `https://www.genexus.com/${part}/` }, h("i", { class: "fa-solid fa-house" })));
      }
      else {
        item = part;
      }
      buffer.push(item);
      if (i + 1 !== this.breadcrumbs.length) {
        buffer.push(h("i", { class: "fa-solid fa-greater-than" }));
      }
    });
    return buffer;
  }
  render() {
    return (h(Host, { class: { 'gwds-breadcrumbs': true } }, h("section", { class: "section" }, h("div", { class: "container" }, this.generateBreadcrumbs()))));
  }
  static get style() { return gwdsBreadcrumbsCss; }
}, [0, "gwds-breadcrumbs", {
    "url": [1],
    "breadcrumbs": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-breadcrumbs"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-breadcrumbs":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsBreadcrumbs$1);
      }
      break;
  } });
}

const GwdsBreadcrumbs = GwdsBreadcrumbs$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsBreadcrumbs, defineCustomElement };
