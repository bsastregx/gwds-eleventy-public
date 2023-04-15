import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';
import { d as defineCustomElement$4 } from './gwds-button2.js';
import { d as defineCustomElement$3 } from './gwds-video2.js';
import { d as defineCustomElement$2 } from './gwds-video-lite2.js';

const gwdsVideoSectionCss = ":host{display:block}.gwds-video-section{display:block;}@media (min-width: 992px){.gwds-video-section__content-wrapper :last-child{margin-bottom:0}}";

const GwdsVideoSection$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.bgColor = null;
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    this.alignContent = 'left';
    this.videoId = null;
    this.lite = false;
    this.videoPoster = null;
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
      this.leftColClasses = 'col-12 col-lg-5 order-lg-2 d-flex align-items-center';
      this.rightColClasses = 'col-12 col-lg-6 d-flex align-items-center order-lg-1';
    }
    else {
      //is left
      this.rowClasses = 'row justify-content-between';
      this.leftColClasses = 'col-12 col-lg-5 order-lg-1 d-flex align-items-center';
      this.rightColClasses = 'col-12 col-lg-6 d-flex align-items-center order-lg-2';
    }
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  componentDidLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-video-section': true, 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("section", null, h("div", { class: "container" }, h("div", { class: this.rowClasses }, h("div", { class: this.leftColClasses }, h("div", { class: {
        'gwds-video-section__content-wrapper': true,
      } }, this.mainTitle ? h("h2", { class: "h3 mt-0" }, this.mainTitle) : null, h("slot", null), this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null, this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null, this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)), h("div", { class: this.rightColClasses }, this.lite ? h("gwds-video-lite", { videoId: this.videoId, poster: this.videoPoster }) : h("gwds-video", { videoId: this.videoId, fullWidth: true })))))));
  }
  static get style() { return gwdsVideoSectionCss; }
}, [4, "gwds-video-section", {
    "bgColor": [1, "bg-color"],
    "mainTitle": [1, "main-title"],
    "pt0": [4, "pt-0"],
    "pb0": [4, "pb-0"],
    "alignContent": [1, "align-content"],
    "videoId": [1, "video-id"],
    "lite": [4],
    "videoPoster": [1, "video-poster"],
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
  const components = ["gwds-video-section", "gwds-button", "gwds-video", "gwds-video-lite"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-video-section":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsVideoSection$1);
      }
      break;
    case "gwds-button":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gwds-video":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gwds-video-lite":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GwdsVideoSection = GwdsVideoSection$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsVideoSection, defineCustomElement };
