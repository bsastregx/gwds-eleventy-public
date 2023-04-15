import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsLogosCss = ":host{display:block}";

const GwdsLogos = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.mainTitle = null;
  }
  render() {
    return (h(Host, { class: { 'gwds-logos': true } }, h("div", { class: "container" }, this.mainTitle ? h("h3", { class: "h5" }, this.mainTitle) : null, h("gwds-grid", { perRow: "6" }, h("slot", null)))));
  }
};
GwdsLogos.style = gwdsLogosCss;

export { GwdsLogos as gwds_logos };
