import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';

const gwdsAccordionCss = ":host{display:block}.gwds-accordion{display:block}";

const GwdsAccordion$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.bgColor = null;
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    this.textColor = null;
    this.pageJustLoaded = true; //This will prevent the accordion to collapse when resizeObserver is called on page load.
  }
  accordionOpenedHandler(event) {
    //close all opened accordions, except the one that emitted this event.
    const itemId = event.detail['id'];
    const accordionItems = this.el.querySelectorAll('gwds-accordion-item');
    accordionItems.forEach(item => {
      if (item.itemId !== itemId) {
        if (item.active) {
          item.active = false;
        }
      }
    });
  }
  componentWillLoad() {
    this.resizeObserver();
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    //define --accordion-text-color var equal to this.textColor, for styling the "+/-" color.
    this.el.style.setProperty('--accordion-text-color', `var(${this.textColor})`);
  }
  componentDidLoad() { }
  resizeObserver() {
    let prevWidth = 0;
    const resizeObserver = new ResizeObserver(entries => {
      var _a;
      for (const entry of entries) {
        //this.closeAccordions();
        const width = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0].inlineSize;
        if (typeof width === 'number' && width !== prevWidth) {
          prevWidth = width;
          if (this.pageJustLoaded) {
            this.pageJustLoaded = false;
            return;
          }
          else {
            this.closeAccordions();
          }
        }
      }
    });
    resizeObserver.observe(this.el);
  }
  closeAccordions() {
    const accordionItems = this.el.querySelectorAll('gwds-accordion-item');
    accordionItems.forEach(item => {
      if (item.active) {
        item.active = false;
      }
    });
  }
  render() {
    return (h(Host, { class: { 'gwds-accordion': true }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("section", { class: "section" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "col-12 col-lg-6" }, this.mainTitle ? h("h2", { class: "h2" }, this.mainTitle) : null), h("div", { class: "col-12 col-lg-6" }, h("slot", null)))))));
  }
  get el() { return this; }
  static get style() { return gwdsAccordionCss; }
}, [4, "gwds-accordion", {
    "bgColor": [1, "bg-color"],
    "mainTitle": [1, "main-title"],
    "pt0": [4, "pt-0"],
    "pb0": [4, "pb-0"],
    "textColor": [32],
    "pageJustLoaded": [32]
  }, [[0, "accordionOpened", "accordionOpenedHandler"]]]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsAccordion$1);
      }
      break;
  } });
}

const GwdsAccordion = GwdsAccordion$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsAccordion, defineCustomElement };
