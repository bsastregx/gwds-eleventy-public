import { Component, Host, h, Prop } from '@stencil/core';
export class GwButton {
  constructor() {
    this.label = null;
    this.type = 'primary';
    this.size = 'regular';
    this.url = null;
    this.target = '_self';
    this.m0 = false;
  }
  render() {
    return (h(Host, { class: {
        'gwds-button': true,
        'gwds-button--primary': this.type === 'primary',
        'gwds-button--secondary': this.type === 'secondary',
        'gwds-button--tertiary': this.type === 'tertiary',
        'gwds-button--small': this.size === 'small',
        'gwds-button--regular': this.size === 'regular',
        'gwds-button--has-link': this.url !== null,
        'm-0': this.m0,
      } }, this.url !== null ? (h("a", { tabindex: "0", class: { 'gwds-button__button': true }, href: this.url, target: this.target }, this.label)) : (this.label)));
  }
  static get is() { return "gwds-button"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-button.css"]
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
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'secondary' | 'tertiary'",
        "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "type",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'small' | 'regular'",
        "resolved": "\"regular\" | \"small\"",
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
      "defaultValue": "'regular'"
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
    "target": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'_blank' | '_self'",
        "resolved": "\"_blank\" | \"_self\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "m0": {
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
      "attribute": "m-0",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
