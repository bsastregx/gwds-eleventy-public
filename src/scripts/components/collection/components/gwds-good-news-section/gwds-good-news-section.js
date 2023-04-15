import { Component, Host, h, Prop, Watch } from '@stencil/core';
export class GwdsGoodNewsSection {
  constructor() {
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
    return (h(Host, { class: { 'gwds-good-news-section': true } },
      h("section", { class: "section" },
        h("div", { class: "container" },
          h("h1", { class: "h4 mt-0" }, this.sectionTitle),
          h("div", { class: "gwds-good-news-section__slotted-content" },
            h("slot", null)),
          h("div", { class: "gwds-good-news-section__wrapper" },
            h("gwds-grid", { "per-row": "4" }, this.renderNews()))))));
  }
  static get is() { return "gwds-good-news-section"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-good-news-section.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-good-news-section.css"]
  }; }
  static get properties() { return {
    "sectionTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "section-title",
      "reflect": false,
      "defaultValue": "null"
    },
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "Array<Object> | undefined",
        "resolved": "Object[]",
        "references": {
          "Array": {
            "location": "global"
          },
          "Object": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "defaultValue": "undefined"
    },
    "test": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "test",
      "reflect": false,
      "defaultValue": "null"
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'l1' | 'l2'",
        "resolved": "\"l1\" | \"l2\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "layout",
      "reflect": false,
      "defaultValue": "'l1'"
    }
  }; }
  static get watchers() { return [{
      "propName": "data",
      "methodName": "watchPropHandler"
    }]; }
}
