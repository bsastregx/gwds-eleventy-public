import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsGoodNews {
  constructor() {
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
      } },
      h("article", { class: "gwds-good-news__article" },
        this.layout === 'l2' ? (h("div", { class: "gwds-good-news__img-wrapper" },
          h("a", { href: this.url, class: "gwds-good-news__img-link" },
            h("img", { src: this.imgUrl, class: "gwds-good-news__img" })))) : null,
        h("gwds-tag", { label: this.category, "bg-color": "black" }),
        h("h1", { class: "h5 gwds-good-news__title" },
          h("a", { href: this.url, class: "gwds-good-news__link" }, this.newsTitle)),
        h("div", { class: "gwds-good-news__wrapper" },
          h("gwds-avatar", { imgUrl: this.authorAvatarUrl, imgAlt: this.authorAvatarAlt }),
          h("span", { class: "gwds-good-news__autor-name" }, this.authorName),
          h("span", { class: "pipe" }, "|"),
          h("time", { class: "gwds-good-news__date", dateTime: this.date }, this.date)),
        h("slot", null))));
  }
  static get is() { return "gwds-good-news"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-good-news.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-good-news.css"]
  }; }
  static get properties() { return {
    "category": {
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
      "attribute": "category",
      "reflect": false,
      "defaultValue": "null"
    },
    "newsTitle": {
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
      "attribute": "news-title",
      "reflect": false,
      "defaultValue": "null"
    },
    "authorName": {
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
      "attribute": "author-name",
      "reflect": false,
      "defaultValue": "null"
    },
    "authorAvatarUrl": {
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
      "attribute": "author-avatar-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "authorAvatarAlt": {
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
      "attribute": "author-avatar-alt",
      "reflect": false,
      "defaultValue": "null"
    },
    "imgUrl": {
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
      "attribute": "img-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "imgAlt": {
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
      "attribute": "img-alt",
      "reflect": false,
      "defaultValue": "null"
    },
    "date": {
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
      "attribute": "date",
      "reflect": false,
      "defaultValue": "null"
    },
    "url": {
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
      "attribute": "url",
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
}
