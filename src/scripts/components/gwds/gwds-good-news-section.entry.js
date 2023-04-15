import { r as registerInstance, h, e as Host } from './index-bf16d04e.js';

const gwdsGoodNewsSectionCss = ":host{display:block}.gwds-good-news-section__slotted-content *:last-child{margin-bottom:0}.gwds-good-news-section__wrapper{margin-top:var(--gwds__space--l)}";

const GwdsGoodNewsSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.sectionTitle = null;
    this.data = undefined;
    this.test = null;
    this.layout = 'l1';
  }
  watchPropHandler(newValue) {
    if (newValue !== undefined) {
    }
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
};
GwdsGoodNewsSection.style = gwdsGoodNewsSectionCss;

export { GwdsGoodNewsSection as gwds_good_news_section };
