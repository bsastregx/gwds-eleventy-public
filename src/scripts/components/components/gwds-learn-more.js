import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';
import { d as defineCustomElement$2 } from './gwds-button2.js';

const gwdsLearnMoreCss = ":host{display:block}.gwds-learn-more__col-left :last-child{margin-bottom:0}";

const GwdsLearnMore$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.bgColor = 'dark-100';
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
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
    this.colClasses = null;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: { 'gwds-learn-more': true } }, h("section", { class: "section", style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("div", { class: {
        'container': true,
        'pt-0': this.pt0,
        'pb-0': this.pb0,
      } }, h("div", { class: { 'row d-flex align-items-center': true } }, h("div", { class: { 'gwds-learn-more__col-left col col-12 col-lg-6': true } }, this.mainTitle ? (h("h2", { class: {
        'h3': true,
        'mt-0': true,
      } }, this.mainTitle)) : null, h("slot", null)), h("div", { class: { 'col col-12 col-lg-6 d-lg-flex justify-content-lg-end': true } }, this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null, this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null, this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null))))));
  }
  static get style() { return gwdsLearnMoreCss; }
}, [4, "gwds-learn-more", {
    "bgColor": [1, "bg-color"],
    "mainTitle": [1, "main-title"],
    "pt0": [4, "pt-0"],
    "pb0": [4, "pb-0"],
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
    "colClasses": [32],
    "textColor": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-learn-more", "gwds-button"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-learn-more":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsLearnMore$1);
      }
      break;
    case "gwds-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GwdsLearnMore = GwdsLearnMore$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsLearnMore, defineCustomElement };
