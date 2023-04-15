import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';
import { t as textContrast } from './utils-ef502027.js';

const live2022CardCss = ":host{display:block}.live-2022-card{display:block}.live-2022-card__link{text-decoration:none;display:inline-block;width:100%;height:100%;padding:var(--gwds__space--s);border-width:4px;border-style:solid;border-color:transparent;transition:var(--gwds__transition--super-fast) border-color}.live-2022-card__link:hover{text-decoration:none;border-color:var(--gwds__color--black)}.live-2022-card__title{font-size:20px !important}.live-2022-card__avatar-wrapper{display:flex;align-items:center;gap:var(--gwds__space--xs);margin-bottom:var(--gwds__space--xs)}.live-2022-card__image-wrapper{text-align:right}.live-2022-card__author{font-weight:var(--gwds__font-weight--light)}";

const Live2022Card = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.url = null;
    this.cardTitle = null;
    this.speaker1Name = null;
    this.speaker1AvatarUrl = null;
    this.speaker2Name = null;
    this.speaker2AvatarUrl = null;
    this.imageUrl = null;
    this.imageAlt = null;
    this.bgColor = null;
    this.minWidth = '250px';
    this.maxWidth = '500px';
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { style: {
        backgroundColor: `var(--live-2022__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
        minWidth: this.minWidth,
        maxWidth: this.maxWidth,
      }, class: "live-2022-card" }, h("a", { class: "live-2022-card__link", href: this.url }, h("article", null, this.cardTitle ? h("h4", { class: "live-2022-card__title h4" }, this.cardTitle) : null, this.speaker1Name ? (h("div", { class: "live-2022-card__avatar-wrapper" }, this.speaker1AvatarUrl ? h("gwds-avatar", { imgUrl: this.speaker1AvatarUrl, imgAlt: this.speaker1Name }) : null, this.speaker1Name ? h("span", { class: "live-2022-card__author" }, this.speaker1Name) : null)) : null, this.speaker2Name ? (h("div", { class: "live-2022-card__avatar-wrapper" }, h("gwds-avatar", { imgUrl: this.speaker2AvatarUrl, imgAlt: this.speaker2Name }), this.speaker2Name ? h("span", { class: "live-2022-card__author" }, this.speaker2Name) : null)) : null, this.imageUrl ? (h("div", { class: "live-2022-card__image-wrapper" }, h("img", { src: this.imageUrl, alt: this.imageAlt }))) : null))));
  }
};
Live2022Card.style = live2022CardCss;

export { Live2022Card as live_2022_card };
