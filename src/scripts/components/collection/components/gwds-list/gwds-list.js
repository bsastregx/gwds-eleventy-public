import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import textContrast from '../../utils/utils';
export class GwdsList {
  constructor() {
    this.mainTitle = null;
    this.description = null;
    this.bgColor = null;
    this.pt0 = false;
    this.pb0 = false;
    this.textColor = null;
    this.hasDescriptionSlot = false;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    this.hasDescriptionSlot = !!this.el.querySelector('[slot="description"]');
  }
  render() {
    return (h(Host, { class: {
        'gwds-list': true,
      } },
      h("section", { class: { 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 }, style: {
          backgroundColor: `var(--gwds__color--${this.bgColor})`,
          color: `var(${this.textColor})`,
        } },
        h("div", { class: "gwds-list__container container" },
          this.mainTitle ? h("h1", { class: "gwds-list__title h2 mt-0 tac" }, this.mainTitle) : null,
          h("slot", { name: "description" }),
          h("gwds-grid", { "per-row": "2" },
            h("slot", null))))));
  }
  static get is() { return "gwds-list"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-list.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-list.css"]
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
      "defaultValue": "null"
    },
    "pt0": {
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
      "attribute": "pt-0",
      "reflect": false,
      "defaultValue": "false"
    },
    "pb0": {
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
      "attribute": "pb-0",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "textColor": {},
    "hasDescriptionSlot": {}
  }; }
  static get elementRef() { return "el"; }
}
