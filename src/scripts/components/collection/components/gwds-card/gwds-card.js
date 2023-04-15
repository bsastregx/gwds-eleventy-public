import { Component, Host, h, Prop, State } from '@stencil/core';
import { marked } from 'marked';
import textContrast from '../../utils/utils';
export class GwdsCard {
  constructor() {
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
      } },
      h("article", { class: { 'gwds-card__article': true } },
        this.imgSrc && this.imgAlt ? (h("div", { class: { 'gwds-card__img-container': true } },
          h("img", { src: this.imgSrc, alt: this.imgAlt, loading: "lazy" }))) : null,
        this.imgSrc && !this.imgAlt ? (h("div", { class: { 'gwds-card__img-container': true, 'gwds-card__img-container--no-image': true } }, "Please provide an alt attribute for the image")) : null,
        h("div", { class: { 'gwds-card__content-container': true } },
          this.tagLabel ? h("gwds-tag", { class: { 'gwds-card__tag': true }, label: this.tagLabel }) : null,
          this.titleLabel ? h("h1", { class: { 'gwds-card__title': true, 'h4': true, 'mt-0': true } }, this.titleLabel) : null,
          this.description ? h("div", { innerHTML: marked.parse(this.description) }) : h("slot", null),
          this.linkUrl && this.linkLabel ? (h("a", { class: { 'gwds-card__link': true }, href: this.linkUrl, target: `"${this.linkTarget}"` }, this.linkLabel)) : null))));
  }
  static get is() { return "gwds-card"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-card.css"]
  }; }
  static get properties() { return {
    "bgColor": {
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
      "attribute": "bg-color",
      "reflect": false,
      "defaultValue": "'white'"
    },
    "imgSrc": {
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
      "attribute": "img-src",
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
    "tagLabel": {
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
      "attribute": "tag-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "titleLabel": {
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
      "attribute": "title-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "description": {
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
      "attribute": "description",
      "reflect": false,
      "defaultValue": "null"
    },
    "linkUrl": {
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
      "attribute": "link-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "linkLabel": {
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
      "attribute": "link-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "linkTarget": {
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
      "attribute": "link-target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "noShadow": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "no-shadow",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "textColor": {}
  }; }
}
