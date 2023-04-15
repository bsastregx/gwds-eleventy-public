import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const gwdsAccordionItemCss = ":host{display:block}.gwds-accordion-item:first-child .gwds-accordion-item__header{border-top:0}.gwds-accordion-item:first-child .gwds-accordion-item__header:after{width:0%}.gwds-accordion-item__collapse{height:0;overflow:hidden}.gwds-accordion-item--active .gwds-accordion-item__header:after{width:100% !important}.gwds-accordion-item--active .gwds-accordion-item__collapse{height:auto;overflow:hidden}.gwds-accordion-item--active .gwds-accordion-item__plusminus:before{transform:translatey(-50%) rotate(-90deg);opacity:0}.gwds-accordion-item--active .gwds-accordion-item__plusminus:after{transform:translatey(-50%) rotate(0)}.gwds-accordion-item .gwds-accordion-item__collapse{transition:height var(--gwds__transition--fast)}.gwds-accordion-item__header{border-top-style:solid;border-top-width:1px;border-top-color:inherit;position:relative}.gwds-accordion-item__header:after{content:\"\";position:absolute;width:0%;height:1px;border-top-style:solid;border-top-width:1px;border-top-color:inherit;left:0;bottom:0;transition:width var(--gwds__transition--fast)}.gwds-accordion-item__button{color:inherit;width:100%;text-align:left;border:0;padding-left:0;padding-top:2rem;padding-bottom:1rem;padding-right:30px;font-family:var(--gwds__font-family--body);font-weight:var(--gwds__font-weight--medium);font-size:var(--gwds__font-size--m);line-height:var(--gwds__line-height--spaced);background:transparent;position:relative;cursor:pointer}.gwds-accordion-item__plusminus{position:absolute;width:1rem;height:1rem;cursor:pointer;right:0;top:50%;transform:translateY(-50%)}.gwds-accordion-item__plusminus:before,.gwds-accordion-item__plusminus:after{content:\"\";display:block;background-color:var(--accordion-text-color);position:absolute;top:50%;left:0;transition:var(--gwds__transition--fast);width:100%;height:2px}.gwds-accordion-item__plusminus:before{transform:translatey(-50%)}.gwds-accordion-item__plusminus:after{transform:translatey(-50%) rotate(90deg)}.gwds-accordion-item__body{font-size:var(--gwds__font-size--m);font-family:var(--gwds__font-family--body);line-height:var(--gwds__line-height--spaced);padding-top:var(--gwds__space--m);padding-bottom:var(--gwds__space--m);position:relative}";

const GwdsAccordionItem$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.accordionOpened = createEvent(this, "accordionOpened", 7);
    this.active = false;
    this.itemId = null; //for internal use
    this.itemTitle = null;
    this.accordionCollapseHeight = '0';
  }
  componentWillLoad() {
    this.itemId = this.itemTitle.replace(/\s/g, '-');
  }
  componentDidLoad() {
    this.active ? (this.accordionCollapseHeight = this.accordionBody.offsetHeight + 'px') : null;
  }
  closeAccordion() {
    this.accordionCollapseHeight = '0';
  }
  openAccordion() {
    this.accordionOpened.emit({ id: this.itemId });
    this.accordionCollapseHeight = this.accordionBody.offsetHeight + 'px';
  }
  toggleAccordion() {
    if (this.active) {
      this.active = false;
    }
    else {
      this.active = true;
    }
  }
  watchActiveHandler(newValue) {
    if (newValue) {
      this.openAccordion();
    }
    else {
      this.closeAccordion();
    }
  }
  render() {
    return (h(Host, { class: { 'gwds-accordion-item': true, 'gwds-accordion-item--active': this.active } }, h("header", { class: { 'gwds-accordion-item__header': true } }, h("button", { class: { 'gwds-accordion-item__button': true }, onClick: this.toggleAccordion.bind(this) }, this.itemTitle, h("span", { class: { 'gwds-accordion-item__plusminus': true } }))), h("div", { ref: el => (this.accordionCollapse = el), class: { 'gwds-accordion-item__collapse': true }, style: { height: this.accordionCollapseHeight } }, h("div", { ref: el => (this.accordionBody = el), class: { 'gwds-accordion-item__body': true } }, h("slot", null)))));
  }
  static get watchers() { return {
    "active": ["watchActiveHandler"]
  }; }
  static get style() { return gwdsAccordionItemCss; }
}, [4, "gwds-accordion-item", {
    "active": [1540],
    "itemId": [1537, "item-id"],
    "itemTitle": [1, "item-title"],
    "accordionCollapseHeight": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-accordion-item"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-accordion-item":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsAccordionItem$1);
      }
      break;
  } });
}

const GwdsAccordionItem = GwdsAccordionItem$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsAccordionItem, defineCustomElement };
