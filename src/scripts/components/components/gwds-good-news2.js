import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './gwds-avatar2.js';
import { d as defineCustomElement$1 } from './gwds-tag2.js';

const gwdsGoodNewsCss = ":host{display:block}.gwds-good-news__wrapper{display:flex;align-items:center;font-size:var(--gwds__font-size--s)}.gwds-good-news__img-wrapper{margin-bottom:var(--gwds__space--s);border-radius:var(--gwds__radius--xs);overflow:hidden}.gwds-good-news__img{width:100%;height:100%;object-fit:cover;transform:scale(1);transition:transform var(--gwds__transition--fast)}.gwds-good-news__img-link:hover .gwds-good-news__img{transform:scale(1.1)}.gwds-good-news .gwds-avatar{margin-right:var(--gwds__space--xs)}.gwds-good-news__autor-name{font-weight:var(--gwds__font-weight--medium)}.gwds-good-news .pipe{display:inline-block;margin:0 var(--gwds__space--xs);color:var(--gwds__color--dark-700)}.gwds-good-news__date{color:var(--gwds__color--dark-700)}";

const GwdsGoodNews = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.category = null;
    this.newsTitle = null;
    this.authorName = null;
    this.authorAvatarUrl = null;
    this.authorAvatarAlt = null;
    this.imgUrl = null;
    this.imgAlt = null;
    this.date = null;
    this.url = null;
    this.layout = 'l1';
  }
  render() {
    return (h(Host, { class: {
        'gwds-good-news': true,
        'gwds-good-news--l1': this.layout === 'l1',
        'gwds-good-news--l2': this.layout === 'l2',
      } }, h("article", { class: "gwds-good-news__article" }, this.layout === 'l2' ? (h("div", { class: "gwds-good-news__img-wrapper" }, h("a", { href: this.url, class: "gwds-good-news__img-link" }, h("img", { src: this.imgUrl, class: "gwds-good-news__img" })))) : null, h("gwds-tag", { label: this.category, "bg-color": "black" }), h("h1", { class: "h5 gwds-good-news__title" }, h("a", { href: this.url, class: "gwds-good-news__link" }, this.newsTitle)), h("div", { class: "gwds-good-news__wrapper" }, h("gwds-avatar", { imgUrl: this.authorAvatarUrl, imgAlt: this.authorAvatarAlt }), h("span", { class: "gwds-good-news__autor-name" }, this.authorName), h("span", { class: "pipe" }, "|"), h("time", { class: "gwds-good-news__date", dateTime: this.date }, this.date)), h("slot", null))));
  }
  static get style() { return gwdsGoodNewsCss; }
}, [4, "gwds-good-news", {
    "category": [1],
    "newsTitle": [1, "news-title"],
    "authorName": [1, "author-name"],
    "authorAvatarUrl": [1, "author-avatar-url"],
    "authorAvatarAlt": [1, "author-avatar-alt"],
    "imgUrl": [1, "img-url"],
    "imgAlt": [1, "img-alt"],
    "date": [1],
    "url": [1],
    "layout": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-good-news", "gwds-avatar", "gwds-tag"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-good-news":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsGoodNews);
      }
      break;
    case "gwds-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
    case "gwds-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$1();
      }
      break;
  } });
}

export { GwdsGoodNews as G, defineCustomElement as d };
