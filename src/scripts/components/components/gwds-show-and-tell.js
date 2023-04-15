import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';
import { d as defineCustomElement$2 } from './gwds-button2.js';

const gwdsShowAndTellCss = ":host{display:block}.gwds-show-and-tell{display:block;}.gwds-show-and-tell__content-wrapper :last-child{margin-bottom:0}.gwds-show-and-tell__image{margin-top:var(--gwds__space--m)}@media (min-width: 992px){.gwds-show-and-tell__image{margin-top:0}}";

const GwShowAndTell = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.bgColor = null;
    this.preTitle = null;
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    this.alignContent = 'left';
    this.imageUrl = null;
    this.imageAlt = null;
    //First Button
    this.firstButtonLabel = null;
    this.firstButtonUrl = null;
    this.firstButtonType = 'primary';
    this.firstButtonTarget = '_self';
    //Second Button
    this.secondButtonLabel = null;
    this.secondButtonUrl = null;
    this.secondButtonType = 'primary';
    this.secondButtonTarget = '_self';
    //Third Button
    this.thirdButtonLabel = null;
    this.thirdButtonUrl = null;
    this.thirdButtonType = 'primary';
    this.thirdButtonTarget = '_self';
    this.rowClasses = null;
    this.leftColClasses = null;
    this.rightColClasses = null;
    this.textColor = null;
  }
  componentWillLoad() {
    //define this.rowClasses and this.colClasses css classes.
    if (this.alignContent === 'right') {
      this.rowClasses = 'row justify-content-between';
      this.leftColClasses = 'col-12 col-lg-6 d-flex align-items-center order-lg-2';
      this.rightColClasses = 'col-12 col-lg-5 d-flex align-items-center order-lg-1';
    }
    else {
      //is left
      this.rowClasses = 'row justify-content-between';
      this.leftColClasses = 'col-12 col-lg-6 d-flex align-items-center order-lg-1';
      this.rightColClasses = 'col-12 col-lg-5 d-flex align-items-center order-lg-2';
    }
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  componentDidLoad() { }
  render() {
    return (h(Host, { style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      }, class: { 'gwds-show-and-tell': true } }, h("section", { class: { 'pt-0': this.pt0, 'pb-0': this.pb0, 'section': true } }, h("div", { class: { container: true } }, h("div", { class: this.rowClasses }, h("div", { class: this.leftColClasses }, h("div", { class: {
        'gwds-show-and-tell__content-wrapper': true,
      } }, this.preTitle ? h("h3", { class: "h4 h4--light mt-0" }, this.preTitle) : null, this.mainTitle ? (h("h2", { class: {
        'h3': true,
        'mt-0': !this.preTitle ? true : false,
      } }, this.mainTitle)) : null, h("slot", null), this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null, this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null, this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)), h("div", { class: this.rightColClasses }, this.imageUrl ? h("img", { class: "gwds-show-and-tell__image", src: this.imageUrl, alt: this.imageAlt, loading: "lazy" }) : null))))));
  }
  static get style() { return gwdsShowAndTellCss; }
}, [4, "gwds-show-and-tell", {
    "bgColor": [1, "bg-color"],
    "preTitle": [1, "pre-title"],
    "mainTitle": [1, "main-title"],
    "pt0": [4, "pt-0"],
    "pb0": [4, "pb-0"],
    "alignContent": [1, "align-content"],
    "imageUrl": [1, "image-url"],
    "imageAlt": [1, "image-alt"],
    "firstButtonLabel": [1, "first-button-label"],
    "firstButtonUrl": [1, "first-button-url"],
    "firstButtonType": [1, "first-button-type"],
    "firstButtonTarget": [1, "first-button-target"],
    "secondButtonLabel": [1, "second-button-label"],
    "secondButtonUrl": [1, "second-button-url"],
    "secondButtonType": [1, "second-button-type"],
    "secondButtonTarget": [1, "second-button-target"],
    "thirdButtonLabel": [1, "third-button-label"],
    "thirdButtonUrl": [1, "third-button-url"],
    "thirdButtonType": [1, "third-button-type"],
    "thirdButtonTarget": [1, "third-button-target"],
    "rowClasses": [32],
    "leftColClasses": [32],
    "rightColClasses": [32],
    "textColor": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-show-and-tell", "gwds-button"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-show-and-tell":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwShowAndTell);
      }
      break;
    case "gwds-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GwdsShowAndTell = GwShowAndTell;
const defineCustomElement = defineCustomElement$1;

export { GwdsShowAndTell, defineCustomElement };
