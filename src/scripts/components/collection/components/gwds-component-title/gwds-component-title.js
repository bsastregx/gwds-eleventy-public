import { Component, Host, h, Prop, State } from '@stencil/core';
export class GwdsComponentTitle {
  constructor() {
    this.label = null;
    this.experimental = false;
    this.showCode = false;
  }
  toggleCode() {
    if (this.showCode) {
      this.showCode = false;
    }
    else {
      this.showCode = true;
    }
  }
  render() {
    return (h(Host, { class: { 'gwds-component-title': true } },
      h("h", null,
        h("div", { class: "gwds-component-title__wrapper" },
          h("span", { class: { 'gwds-component-title__label': true } },
            this.label,
            " \u2193",
            ' ',
            this.experimental ? (h("span", { class: { 'gwds-component-title__experimental': true } },
              h("i", { class: "fa-solid fa-flask", style: { marginRight: '6px' } }),
              "experimental")) : null),
          h("span", { class: "gwds-component-title__show-properties", onClick: this.toggleCode.bind(this) },
            h("i", { class: "fa-solid fa-wrench" }),
            " ",
            this.showCode ? 'hide properties' : 'show properties')),
        h("code", { class: { 'gwds-component-title__code': true, 'gwds-component-title__code--show': this.showCode } },
          h("slot", null)))));
  }
  static get is() { return "gwds-component-title"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-component-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-component-title.css"]
  }; }
  static get properties() { return {
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
    "experimental": {
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
      "attribute": "experimental",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "showCode": {}
  }; }
}
