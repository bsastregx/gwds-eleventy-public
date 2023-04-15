import { r as registerInstance, h, e as Host, g as getElement } from './index-bf16d04e.js';
import { m as marked_umd } from './marked.umd-a4e19efc.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsLookAtMeCss = ":host{display:block}.gwds-look-at-me{display:block;background-repeat:no-repeat;background-size:1600px;background-position:bottom right;position:relative;transition:var(--gwds__transition--regular) background-color}.gwds-look-at-me__buttons-container :last-child{margin-right:0}@media (max-width: 991px){.gwds-look-at-me{background-image:none !important}}";

const GwLookAtMe = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  get el() { return getElement(this); }
};
GwLookAtMe.style = gwdsLookAtMeCss;

export { GwLookAtMe as gwds_look_at_me };
