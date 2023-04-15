import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsListItem {
  constructor() {
    this.iconUrl = null;
    this.iconAlt = null;
  }
  render() {
    return (h(Host, { class: {
        'gwds-list-item': true,
      } },
      this.iconUrl ? h("img", { class: "gwds-list-item__icon", src: this.iconUrl, alt: this.iconAlt }) : null,
      h("slot", null)));
  }
  static get is() { return "gwds-list-item"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-list-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-list-item.css"]
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
    }
  }; }
}
