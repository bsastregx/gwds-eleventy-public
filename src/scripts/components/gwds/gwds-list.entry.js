import { r as registerInstance, h, e as Host, g as getElement } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsListCss = ".gwds-list__title{margin-bottom:var(--gwds__space--l) !important}.gwds-list__container{margin-bottom:calc(var(--gwds__space--m) * -1)}";

const GwdsList = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
GwdsList.style = gwdsListCss;

export { GwdsList as gwds_list };
