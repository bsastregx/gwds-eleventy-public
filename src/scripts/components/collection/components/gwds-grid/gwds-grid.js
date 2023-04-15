import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsGrid {
  constructor() {
    this.perRow = '3';
    this.gap = 's';
  }
  render() {
    return (h(Host, { class: { 'gwds-grid': true } },
      h("div", { class: {
          'gwds-grid__container': true,
          'gwds-grid__container--2': this.perRow === '2',
          'gwds-grid__container--3': this.perRow === '3',
          'gwds-grid__container--4': this.perRow === '4',
          'gwds-grid__container--6': this.perRow === '6',
        }, style: { gap: `var(--gwds__space--${this.gap})` } },
        h("slot", null))));
  }
  static get is() { return "gwds-grid"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-grid.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-grid.css"]
  }; }
  static get properties() { return {
    "perRow": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'2' | '3' | '4' | '6'",
        "resolved": "\"2\" | \"3\" | \"4\" | \"6\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "per-row",
      "reflect": false,
      "defaultValue": "'3'"
    },
    "gap": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'xs' | 's' | 'm'",
        "resolved": "\"m\" | \"s\" | \"xs\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "gap",
      "reflect": false,
      "defaultValue": "'s'"
    }
  }; }
}
