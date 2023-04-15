import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { m as marked_umd } from './marked.umd.js';
import { t as textContrast } from './utils.js';
import { d as defineCustomElement$2 } from './gwds-button2.js';

const gwdsLookAtMeCss = ":host{display:block}.gwds-look-at-me{display:block;background-repeat:no-repeat;background-size:1600px;background-position:bottom right;position:relative;transition:var(--gwds__transition--regular) background-color}.gwds-look-at-me__buttons-container :last-child{margin-right:0}@media (max-width: 991px){.gwds-look-at-me{background-image:none !important}}";

const GwLookAtMe = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.bgColor = null;
    this.preTitle = null;
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    this.alignContent = 'left';
    this.bgImage = '';
    this.bgSize = '1600px';
    this.description = null;
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
    this.bgPosition = 'bottom right';
    this.textColor = null;
  }
  componentWillLoad() {
    //define this.rowClasses and this.colClasses css classes.
    if (this.alignContent === 'center') {
      this.rowClasses = 'row justify-content-md-center tac-md';
      this.colClasses = 'col-12 col-lg-8';
    }
    else if (this.alignContent === 'right') {
      this.rowClasses = 'row justify-content-md-end';
      this.colClasses = 'col-12 col-lg-7 col-xl-6';
    }
    else {
      //is left
      this.rowClasses = 'row';
      this.colClasses = 'col-12 col-lg-7 col-xl-6';
    }
    //define backgroundPosition
    if (this.alignContent === 'right') {
      this.bgPosition = 'bottom left';
    }
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  componentDidLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-look-at-me': true }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        backgroundImage: `url(${this.bgImage})`,
        backgroundSize: this.bgSize,
        backgroundPosition: this.bgPosition,
        color: `var(${this.textColor})`,
      } }, h("section", { class: { 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 } }, h("div", { class: {
        container: true,
      } }, h("div", { class: this.rowClasses }, h("div", { class: this.colClasses }, this.preTitle ? h("h3", { class: "h3 h3--light mt-0" }, this.preTitle) : null, this.mainTitle ? (h("h2", { class: {
        'h1': true,
        'mt-0': !this.preTitle ? true : false,
      } }, this.mainTitle)) : null, this.description ? h("div", { innerHTML: marked_umd.marked.parse(this.description) }) : h("slot", null), h("div", { class: {
        'gwds-look-at-me__buttons-container': true,
      } }, this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null, this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null, this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)))))));
  }
  get el() { return this; }
  static get style() { return gwdsLookAtMeCss; }
}, [4, "gwds-look-at-me", {
    "bgColor": [1, "bg-color"],
    "preTitle": [1, "pre-title"],
    "mainTitle": [1, "main-title"],
    "pt0": [4, "pt-0"],
    "pb0": [4, "pb-0"],
    "alignContent": [1, "align-content"],
    "bgImage": [1, "bg-image"],
    "bgSize": [1, "bg-size"],
    "description": [1],
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
    "bgPosition": [32],
    "textColor": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-look-at-me", "gwds-button"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-look-at-me":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwLookAtMe);
      }
      break;
    case "gwds-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GwdsLookAtMe = GwLookAtMe;
const defineCustomElement = defineCustomElement$1;

export { GwdsLookAtMe, defineCustomElement };
