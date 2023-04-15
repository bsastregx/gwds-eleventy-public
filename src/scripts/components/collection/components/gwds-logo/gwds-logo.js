import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsLogo {
  constructor() {
    this.name = null;
    this.imgSrc = null;
    this.imgAlt = null;
    this.label = null;
    this.size = '32px';
    this.linkUrl = null;
  }
  render() {
    return (h(Host, { class: { 'gwds-logo': true } },
      h("article", { class: { 'gwds-logo__container': true } },
        this.linkUrl ? h("a", { class: { 'gwds-logo__anchor': true }, href: this.linkUrl, target: "_blank" }) : null,
        h("img", { style: {
            width: this.size,
          }, class: { 'gwds-logo__image': true }, src: this.imgSrc, alt: this.imgAlt, loading: "lazy" }),
        this.label ? h("h1", { class: { 'gwds-logo__label h5': true } }, this.label) : null)));
  }
  static get is() { return "gwds-logo"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-logo.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-logo.css"]
  }; }
  static get properties() { return {
    "name": {
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
      "attribute": "name",
      "reflect": false,
      "defaultValue": "null"
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
    "label": {
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
      "attribute": "label",
      "reflect": false,
      "defaultValue": "null"
    },
    "size": {
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
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'32px'"
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
    }
  }; }
}
