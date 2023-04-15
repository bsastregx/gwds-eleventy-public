import { Component, Host, h, Prop, State } from '@stencil/core';
import textContrast from '../../utils/utils';
export class GwdsTag {
  constructor() {
    this.label = null;
    this.bgColor = 'violet-50';
    this.url = null;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: { 'gwds-tag': true } },
      h("small", { class: { 'gwds-tag__span': true }, style: { backgroundColor: `var(--gwds__color--${this.bgColor})`, color: `var(${this.textColor})` } }, this.label)));
  }
  static get is() { return "gwds-tag"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-tag.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-tag.css"]
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
      "defaultValue": "'violet-50'"
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
    }
  }; }
  static get states() { return {
    "textColor": {}
  }; }
}
