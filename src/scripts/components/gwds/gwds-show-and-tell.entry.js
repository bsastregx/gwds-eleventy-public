import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsShowAndTellCss = ":host{display:block}.gwds-show-and-tell{display:block;}.gwds-show-and-tell__content-wrapper :last-child{margin-bottom:0}.gwds-show-and-tell__image{margin-top:var(--gwds__space--m);width:100%;height:auto}@media (min-width: 992px){.gwds-show-and-tell__image{margin-top:0}}";

const GwShowAndTell = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
      } }, this.mainTitle)) : null, h("slot", null), this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null, this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null, this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)), h("div", { class: this.rightColClasses }, this.imageUrl ? h("img", { class: "gwds-show-and-tell__image", src: this.imageUrl, alt: this.imageAlt, loading: "lazy", width: "510", height: "287" }) : null))))));
  }
};
GwShowAndTell.style = gwdsShowAndTellCss;

export { GwShowAndTell as gwds_show_and_tell };
