import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$5 } from './gwds-avatar2.js';
import { d as defineCustomElement$4 } from './gwds-good-news2.js';
import { d as defineCustomElement$3 } from './gwds-grid2.js';
import { d as defineCustomElement$2 } from './gwds-tag2.js';

const gwdsGoodNewsSectionCss = ":host{display:block}.gwds-good-news-section__slotted-content *:last-child{margin-bottom:0}.gwds-good-news-section__wrapper{margin-top:var(--gwds__space--l)}";

const GwdsGoodNewsSection$1 = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.sectionTitle = null;
    this.data = undefined;
    this.test = null;
    this.layout = 'l1';
  }
  watchPropHandler(newValue) {
  }
  renderNews() {
    if (this.data !== null && this.data !== undefined) {
      const buffer = [];
      this.data['news'].forEach(news => {
        buffer.push(h("gwds-good-news", { category: news['category'], "news-title": news['title'], "author-avatar-url": news['author-avatar-url'], "author-name": news['autor-name'], date: news['date'], imgUrl: news['image-url'], layout: this.layout }));
      });
      return buffer;
    }
  }
  render() {
    return (h(Host, { class: { 'gwds-good-news-section': true } }, h("section", { class: "section" }, h("div", { class: "container" }, h("h1", { class: "h4 mt-0" }, this.sectionTitle), h("div", { class: "gwds-good-news-section__slotted-content" }, h("slot", null)), h("div", { class: "gwds-good-news-section__wrapper" }, h("gwds-grid", { "per-row": "4" }, this.renderNews()))))));
  }
  static get watchers() { return {
    "data": ["watchPropHandler"]
  }; }
  static get style() { return gwdsGoodNewsSectionCss; }
}, [4, "gwds-good-news-section", {
    "sectionTitle": [1, "section-title"],
    "data": [16],
    "test": [1],
    "layout": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["gwds-good-news-section", "gwds-avatar", "gwds-good-news", "gwds-grid", "gwds-tag"];
  components.forEach(tagName => { switch (tagName) {
    case "gwds-good-news-section":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, GwdsGoodNewsSection$1);
      }
      break;
    case "gwds-avatar":
      if (!customElements.get(tagName)) {
        defineCustomElement$5();
      }
      break;
    case "gwds-good-news":
      if (!customElements.get(tagName)) {
        defineCustomElement$4();
      }
      break;
    case "gwds-grid":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "gwds-tag":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const GwdsGoodNewsSection = GwdsGoodNewsSection$1;
const defineCustomElement = defineCustomElement$1;

export { GwdsGoodNewsSection, defineCustomElement };
