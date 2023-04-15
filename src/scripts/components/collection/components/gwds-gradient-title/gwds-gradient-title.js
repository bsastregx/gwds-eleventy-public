import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsGradientTitle {
  constructor() {
    this.from = 'red-200';
    this.to = 'red-400';
    this.center = false;
  }
  render() {
    return (h(Host, { class: { 'gwds-gradient-title': true, 'h1': true } },
      h("div", { class: { container: true, tac: this.center } },
        h("h2", { class: { h1: true, title: true, tac: this.center }, style: { background: `-webkit-linear-gradient(45deg, var(--gwds__color--${this.from}), var(--gwds__color--${this.to}))` } },
          h("slot", null)))));
  }
  static get is() { return "gwds-gradient-title"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-gradient-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-gradient-title.css"]
  }; }
  static get properties() { return {
    "from": {
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
      "attribute": "from",
      "reflect": false,
      "defaultValue": "'red-200'"
    },
    "to": {
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
      "attribute": "to",
      "reflect": false,
      "defaultValue": "'red-400'"
    },
    "center": {
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
      "attribute": "center",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
//backgroundColor: `var(--gwds__color--${this.bgColor})`,
