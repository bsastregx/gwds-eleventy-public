import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsQuoteCss = ":host{display:block}.gwds-quote{display:block;}.gwds-quote__image{object-fit:cover;width:100%;height:100%}.gwds-quote__image-wrapper{width:200px;height:200px;border-radius:150px;border:5px solid var(--gwds__color--fuchsia-500);overflow:hidden;object-fit:cover;margin-right:var(--gwds__space--l)}.gwds-quote__quote{font-size:var(--gwds__font-size--m);margin-bottom:0}.gwds-quote__person-data{display:block;font-size:var(--gwds__font-size--m)}.gwds-quote__person-data--name{text-transform:uppercase}.gwds-quote__footer{margin-top:var(--gwds__space--m)}.gwds-quote__footer .gwds-quote__image-wrapper{width:100px;height:100px;margin-right:var(--gwds__space--s)}.gwds-quote__footer-right small{font-size:var(--gwds__font-size--s)}@media (min-width: 576px){.gwds-quote__footer .gwds-quote__image-wrapper{width:100px;height:100px;margin-right:var(--gwds__space--m)}.gwds-quote__footer-right small{font-size:var(--gwds__font-size--m)}}@media (min-width: 768px){.gwds-quote__quote{font-size:var(--gwds__font-size--l)}}";

const GwdsQuote = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bgColor = null;
    this.whiteText = false;
    this.cite = null;
    this.imageUrl = null;
    this.imageAlt = null;
    this.personLocation = null;
    this.personName = null;
    this.centerVertical = false;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: { 'gwds-quote': true, 'white-text': this.whiteText }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("section", { class: "section" }, h("div", { class: "container" }, h("div", { class: "row" }, h("div", { class: "col d-flex" }, h("div", { class: "gwds-quote__left d-none d-lg-block" }, h("div", { class: "gwds-quote__image-wrapper" }, h("img", { class: "gwds-quote__image", src: this.imageUrl, alt: this.imageAlt }))), h("div", { class: {
        'gwds-quote__right': true,
        'd-flex': this.centerVertical,
        'align-items-center': this.centerVertical,
      } }, h("div", null, h("blockquote", { cite: this.cite, class: "gwds-quote__quote" }, h("p", { class: "m-0" }, h("slot", null)), this.personName || this.personLocation ? (h("footer", { class: { 'gwds-quote__footer': true, 'd-flex': true, 'align-items-center': true } }, h("div", { class: "gwds-quote__footer-left d-lg-none" }, h("div", { class: "gwds-quote__image-wrapper" }, h("img", { class: "gwds-quote__image", src: this.imageUrl, alt: this.imageAlt }))), h("div", { class: "gwds-quote__footer-right" }, this.personName ? h("small", { class: "gwds-quote__person-data gwds-quote__person-data--name" }, this.personName) : null, this.personLocation ? h("small", { class: "gwds-quote__person-data gwds-quote__person-data--location" }, this.personLocation) : null))) : null)))))))));
  }
};
GwdsQuote.style = gwdsQuoteCss;

export { GwdsQuote as gwds_quote };
