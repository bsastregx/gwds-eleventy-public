import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsBreadcrumbsCss = ":host{display:block}.gwds-breadcrumbs .fa-greater-than{margin:0 var(--gwds__space--xs)}";

const GwdsBreadcrumbs = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
GwdsBreadcrumbs.style = gwdsBreadcrumbsCss;

export { GwdsBreadcrumbs as gwds_breadcrumbs };
