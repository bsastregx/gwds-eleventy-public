import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsStackItem {
  constructor() {
    this.iconUrl = null;
    this.iconAlt = null;
    this.mainTitle = null;
    this.buttonLabel = null;
    this.buttonUrl = null;
    this.buttonBlank = false;
    this.visible = false;
  }
  render() {
    return (h(Host, { class: {
        'gwds-stack-item': true,
        'gwds-stack-item--visible': this.visible,
      } },
      h("h2", { class: {
          'h3': true,
          'gwds-stack-item__title': true,
          'mt-0': true,
        } },
        this.iconUrl ? h("img", { src: this.iconUrl, alt: this.iconAlt, class: "gwds-stack-item__icon" }) : null,
        this.mainTitle),
      h("slot", null),
      h("div", null, this.buttonLabel && this.buttonUrl ? h("gwds-button", { class: "gwds-stack-item__button", type: "secondary", url: this.buttonUrl, label: this.buttonLabel }) : null)));
  }
  static get is() { return "gwds-stack-item"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-stack-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-stack-item.css"]
  }; }
  static get properties() { return {
    "iconUrl": {
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
      "attribute": "icon-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "iconAlt": {
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
      "attribute": "icon-alt",
      "reflect": false,
      "defaultValue": "null"
    },
    "mainTitle": {
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
      "attribute": "main-title",
      "reflect": false,
      "defaultValue": "null"
    },
    "buttonLabel": {
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
      "attribute": "button-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "buttonUrl": {
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
      "attribute": "button-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "buttonBlank": {
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
      "attribute": "button-blank",
      "reflect": false,
      "defaultValue": "false"
    },
    "visible": {
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
      "attribute": "visible",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
