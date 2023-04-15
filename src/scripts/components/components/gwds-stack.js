import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';

const gwdsStackCss = ".gwds-stack{}.gwds-stack__item{border:1px solid var(--gwds__color--black);border-radius:var(--gwds__radius--xxs);padding:var(--gwds__space--s);cursor:pointer;margin-bottom:var(--gwds__space--s)}.gwds-stack__item:last-child{margin-bottom:0}.gwds-stack__item:hover{border-color:var(--gwds__color--fuchsia-500)}.gwds-stack__col-left{margin-bottom:var(--gwds__space--m)}@media (min-width: 768px){.gwds-stack__col-left{margin-bottom:0}.gwds-stack__col-left ul{padding-right:var(--gwds__space--m)}}";

const GwdsStack$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.bgColor = 'dark-100';
    this.mainTitle = null;
    this.description = null;
    this.pt0 = false;
    this.pb0 = false;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  slottedItems() {
    const buffer = [];
    const slottedContent = this.el.querySelectorAll('*');
    slottedContent.forEach(function (node, index) {
      const listItem = (h("li", { onClick: this.clickHandler.bind(this, index), class: "gwds-stack__item" }, node.getAttribute('main-title')));
      buffer.push(listItem);
    }.bind(this));
    return buffer;
  }
  clickHandler(index) {
    const slottedContent = this.el.querySelectorAll('gwds-stack-item');
    slottedContent.forEach(function (node, index2) {
      if (index === index2) {
        node.visible = true;
      }
      else {
        node.visible = false;
      }
    });
  }
  render() {
    return (h(Host, { class: {
        'gwds-stack': true,
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("section", { class: { 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 } }, h("div", { class: { 'container': true, 'container--main': true } }, h("div", { class: "row" }, h("div", { class: "gwds-stack__col-left col-12 col-md-6 col-lg-5" }, h("ul", { class: "unstyled" }, this.slottedItems())), h("div", { class: "gwds-stack__col-right col-12 col-md-6 col-lg-7" }, h("slot", null)))))));
  }
  get el() { return this; }
  static get style() { return gwdsStackCss; }
}, [4, "gwds-stack", {
    "bgColor": [1, "bg-color"],
    "mainTitle": [1, "main-title"],
    "description": [1],
    "pt0": [4, "pt-0"],
    "pb0": [4, "pb-0"],
    "textColor": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-stack"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-stack":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsStack$1);
      }
      break;
  } });
}

const GwdsStack = GwdsStack$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsStack, defineCustomElement };
