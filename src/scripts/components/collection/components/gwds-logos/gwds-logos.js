import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsLogos {
  constructor() {
    this.mainTitle = null;
  }
  render() {
    return (h(Host, { class: { 'gwds-logos': true } },
      h("div", { class: "container" },
        this.mainTitle ? h("h3", { class: "h5" }, this.mainTitle) : null,
        h("gwds-grid", { perRow: "6" },
          h("slot", null)))));
  }
  static get is() { return "gwds-logos"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-logos.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-logos.css"]
  }; }
  static get properties() { return {
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
    }
  }; }
}
