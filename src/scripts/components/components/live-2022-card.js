import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { t as textContrast } from './utils.js';
import { d as defineCustomElement$2 } from './gwds-avatar2.js';

const live2022CardCss = ":host{display:block}.live-2022-card{display:block}.live-2022-card__link{text-decoration:none;display:inline-block;width:100%;height:100%;padding:var(--gwds__space--s);border-width:4px;border-style:solid;border-color:transparent;transition:var(--gwds__transition--super-fast) border-color}.live-2022-card__link:hover{text-decoration:none;border-color:var(--gwds__color--black)}.live-2022-card__title{font-size:20px !important}.live-2022-card__avatar-wrapper{display:flex;align-items:center;gap:var(--gwds__space--xs);margin-bottom:var(--gwds__space--xs)}.live-2022-card__image-wrapper{text-align:right}.live-2022-card__author{font-weight:var(--gwds__font-weight--light)}";

const Live2022Card$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
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
  static get style() { return live2022CardCss; }
}, [0, "live-2022-card", {
    "url": [1],
    "cardTitle": [1, "card-title"],
    "speaker1Name": [1, "speaker-1-name"],
    "speaker1AvatarUrl": [1, "speaker-1-avatar-url"],
    "speaker2Name": [1, "speaker-2-name"],
    "speaker2AvatarUrl": [1, "speaker-2-avatar-url"],
    "imageUrl": [1, "image-url"],
    "imageAlt": [1, "image-alt"],
    "bgColor": [1, "bg-color"],
    "minWidth": [1, "min-width"],
    "maxWidth": [1, "max-width"],
    "textColor": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["live-2022-card", "gwds-avatar"];
  components.forEach(tagName => { switch (tagName) {
    case "live-2022-card":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Live2022Card$1);
      }
      break;
    case "gwds-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const Live2022Card = Live2022Card$1;
const defineCustomElement = defineCustomElement$1;

export { Live2022Card, defineCustomElement };
