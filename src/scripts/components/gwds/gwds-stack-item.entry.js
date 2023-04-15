import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsStackItemCss = ".gwds-stack-item{display:none}.gwds-stack-item__icon{display:inline-block;margin-right:var(--gwds__space--s)}.gwds-stack-item__title{display:flex;align-items:center}.gwds-stack-item__button{margin-top:var(--gwds__space--m);margin-bottom:0}.gwds-stack-item--visible{display:block}";

const GwdsStackItem = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.iconUrl = null;
    this.iconAlt = null;
    this.mainTitle = null;
    this.buttonLabel = null;
    this.buttonUrl = null;
    this.buttonBlank = false;
    this.visible = false;
  }
  render() {
    return (h(Host, { class: {
        'gwds-stack-item': true,
        'gwds-stack-item--visible': this.visible,
      } }, h("h2", { class: {
        'h3': true,
        'gwds-stack-item__title': true,
        'mt-0': true,
      } }, this.iconUrl ? h("img", { src: this.iconUrl, alt: this.iconAlt, class: "gwds-stack-item__icon", width: "60", height: "60" }) : null, this.mainTitle), h("slot", null), h("div", null, this.buttonLabel && this.buttonUrl ? h("gwds-button", { class: "gwds-stack-item__button", type: "secondary", url: this.buttonUrl, label: this.buttonLabel }) : null)));
  }
};
GwdsStackItem.style = gwdsStackItemCss;

export { GwdsStackItem as gwds_stack_item };
