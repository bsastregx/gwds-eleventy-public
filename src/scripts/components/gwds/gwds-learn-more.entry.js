import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsLearnMoreCss = ":host{display:block}.gwds-learn-more__col-left :last-child{margin-bottom:0}";

const GwdsLearnMore = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
GwdsLearnMore.style = gwdsLearnMoreCss;

export { GwdsLearnMore as gwds_learn_more };
