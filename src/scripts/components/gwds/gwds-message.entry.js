import { r as registerInstance, h, e as Host, g as getElement } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsMessageCss = ":root{--gwds-message-speed:200ms}:host{display:block}.gwds-message{font-size:var(--gwds__font-size--m);overflow:hidden;transition:var(--gwds-message-speed) height;display:block;}.gwds-message a{color:var(--gwds__color--fuchsia-500)}.gwds-message__wrapper{padding:var(--gwds__space--s) var(--gwds__space--s);display:flex;justify-content:space-between;align-items:baseline;transition:var(--gwds-message-speed) opacity;gap:var(--gwds__space--s)}.gwds-message__container{display:flex;gap:var(--gwds__space--s);flex-direction:column;width:calc(100% - 40px)}.gwds-message__link-button-container{display:flex;gap:var(--gwds__space--s);flex-direction:column}.gwds-message__message{padding-right:0;display:flex;align-items:center;gap:var(--gwds__space--xs)}.gwds-message__button{margin:0 !important}.gwds-message__close{cursor:pointer}.gwds-message__close:hover>*{transform:scale(1.1)}.gwds-message--opacity-0 .gwds-message__wrapper{opacity:0}.gwds-message--height-0{height:0 !important}.gwds-message--fixed{position:fixed;bottom:0;width:100%;z-index:99}.gwds-message--hide-close .gwds-message__container{width:100%}@media (min-width: 576px){.gwds-message__link-button-container{flex-direction:row;align-items:center}}@media (min-width: 768px){.gwds-message__container{flex-direction:row;justify-content:center}}";

const GwdsMessage = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bgColor = 'red-50';
    this.fixed = false;
    this.linkLabel = null;
    this.linkUrl = null;
    this.linkTarget = '_self';
    this.buttonLabel = null;
    this.buttonUrl = null;
    this.buttonTarget = '_self';
    this.buttonCloses = false;
    this.closed = false;
    this.hideClose = false;
    this.opacity0 = false;
    this.height0 = false;
    this.textColor = null;
  }
  watchPropHandler(newValue) {
    if (newValue) {
      this.setHeight();
      this.opacity0 = true;
      setTimeout(() => {
        this.height0 = true;
      }, 200);
    }
  }
  setHeight() {
    const wrapperHeight = this.wrapper.offsetHeight;
    this.el.style.height = wrapperHeight + 'px';
  }
  close() {
    this.closed = true;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    if (this.buttonCloses) {
      this.hideClose = true;
    }
  }
  render() {
    return (h(Host, { class: {
        'gwds-message': true,
        'gwds-message--opacity-0': this.opacity0,
        'gwds-message--height-0': this.height0,
        'gwds-message--fixed': this.fixed,
        'gwds-message--hide-close': this.hideClose,
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("div", { ref: el => (this.wrapper = el), class: "gwds-message__wrapper" }, h("div", { class: { 'gwds-message__container': true } }, h("p", { class: { 'gwds-message__message m-0': true } }, h("slot", null)), h("div", { class: "gwds-message__link-button-container" }, this.linkUrl && this.linkLabel ? (h("a", { class: "gwds-message__link", href: this.linkUrl }, this.linkLabel)) : null, this.buttonLabel && (this.buttonUrl || this.buttonCloses) ? (h("gwds-button", { class: "gwds-message__button", label: this.buttonLabel, url: this.buttonUrl, size: "small", onClick: this.buttonCloses ? this.close.bind(this) : null })) : null)), !this.hideClose ? (h("span", { onClick: this.close.bind(this), class: { 'gwds-message__close': true } }, h("gwds-icon", { src: "/assets/icons/times.svg" }))) : null)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "closed": ["watchPropHandler"]
  }; }
};
GwdsMessage.style = gwdsMessageCss;

export { GwdsMessage as gwds_message };
