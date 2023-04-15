import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsFormInput {
  constructor() {
    this.placeholder = null;
    this.minWidth = '250px';
    this.maxWidth = '100%';
  }
  render() {
    return (h(Host, { class: "gwds-form-input" },
      h("input", { type: "text", placeholder: this.placeholder, style: { minWidth: this.minWidth, maxWidth: this.maxWidth } })));
  }
  static get is() { return "gwds-form-input"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-form-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-form-input.css"]
  }; }
  static get properties() { return {
    "placeholder": {
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
      "attribute": "placeholder",
      "reflect": false,
      "defaultValue": "null"
    },
    "minWidth": {
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
      "attribute": "min-width",
      "reflect": false,
      "defaultValue": "'250px'"
    },
    "maxWidth": {
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
      "attribute": "max-width",
      "reflect": false,
      "defaultValue": "'100%'"
    }
  }; }
}
