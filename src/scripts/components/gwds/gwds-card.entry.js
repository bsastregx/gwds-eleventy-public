import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { m as marked_umd } from './marked.umd-a4e19efc.js';
import { t as textContrast } from './utils-ef502027.js';

const gwdsCardCss = ":host{display:block}.gwds-card{border-radius:var(--gwds__radius--xs);overflow:hidden;height:100%;display:block;}.gwds-card__img-container{line-height:0;height:230px}.gwds-card__img-container img{width:100%;height:100%;object-fit:cover}.gwds-card__img-container--no-image{background-color:var(--gwds__color--orange-50);display:flex;align-items:center;justify-content:center;padding:var(--gwds__space--m);line-height:var(--gwds__line-height--spaced);text-align:center}.gwds-card__content-container{border-top:0;padding:var(--gwds__space--s)}@media (min-width: 992px){.gwds-card__content-container{padding:var(--gwds__space--m)}}";

const GwdsCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bgColor = 'white';
    this.imgSrc = null;
    this.imgAlt = null;
    this.tagLabel = null;
    this.titleLabel = null;
    this.description = null;
    this.linkUrl = null;
    this.linkLabel = null;
    this.linkTarget = '_self';
    this.noShadow = false;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: {
        'gwds-card': true,
        'gwds__shadow--tiny': !this.noShadow,
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } }, h("article", { class: { 'gwds-card__article': true } }, this.imgSrc && this.imgAlt ? (h("div", { class: { 'gwds-card__img-container': true } }, h("img", { src: this.imgSrc, alt: this.imgAlt, loading: "lazy" }))) : null, this.imgSrc && !this.imgAlt ? (h("div", { class: { 'gwds-card__img-container': true, 'gwds-card__img-container--no-image': true } }, "Please provide an alt attribute for the image")) : null, h("div", { class: { 'gwds-card__content-container': true } }, this.tagLabel ? h("gwds-tag", { class: { 'gwds-card__tag': true }, label: this.tagLabel }) : null, this.titleLabel ? h("h1", { class: { 'gwds-card__title': true, 'h4': true, 'mt-0': true } }, this.titleLabel) : null, this.description ? h("div", { innerHTML: marked_umd.marked.parse(this.description) }) : h("slot", null), this.linkUrl && this.linkLabel ? (h("a", { class: { 'gwds-card__link': true }, href: this.linkUrl, target: `"${this.linkTarget}"` }, this.linkLabel)) : null))));
  }
};
GwdsCard.style = gwdsCardCss;

export { GwdsCard as gwds_card };
