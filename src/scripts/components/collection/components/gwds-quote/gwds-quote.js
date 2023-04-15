import { Component, Host, h, Prop, State } from '@stencil/core';
import textContrast from '../../utils/utils';
export class GwdsQuote {
  constructor() {
    this.bgColor = null;
    this.whiteText = false;
    this.cite = null;
    this.imageUrl = null;
    this.imageAlt = null;
    this.personLocation = null;
    this.personName = null;
    this.centerVertical = false;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: { 'gwds-quote': true, 'white-text': this.whiteText }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } },
      h("section", { class: "section" },
        h("div", { class: "container" },
          h("div", { class: "row" },
            h("div", { class: "col d-flex" },
              h("div", { class: "gwds-quote__left d-none d-lg-block" },
                h("div", { class: "gwds-quote__image-wrapper" },
                  h("img", { class: "gwds-quote__image", src: this.imageUrl, alt: this.imageAlt }))),
              h("div", { class: {
                  'gwds-quote__right': true,
                  'd-flex': this.centerVertical,
                  'align-items-center': this.centerVertical,
                } },
                h("div", null,
                  h("blockquote", { cite: this.cite, class: "gwds-quote__quote" },
                    h("p", { class: "m-0" },
                      h("slot", null)),
                    this.personName || this.personLocation ? (h("footer", { class: { 'gwds-quote__footer': true, 'd-flex': true, 'align-items-center': true } },
                      h("div", { class: "gwds-quote__footer-left d-lg-none" },
                        h("div", { class: "gwds-quote__image-wrapper" },
                          h("img", { class: "gwds-quote__image", src: this.imageUrl, alt: this.imageAlt }))),
                      h("div", { class: "gwds-quote__footer-right" },
                        this.personName ? h("small", { class: "gwds-quote__person-data gwds-quote__person-data--name" }, this.personName) : null,
                        this.personLocation ? h("small", { class: "gwds-quote__person-data gwds-quote__person-data--location" }, this.personLocation) : null))) : null)))))))));
  }
  static get is() { return "gwds-quote"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-quote.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-quote.css"]
  }; }
  static get properties() { return {
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
    "whiteText": {
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
      "attribute": "white-text",
      "reflect": false,
      "defaultValue": "false"
    },
    "cite": {
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
      "attribute": "cite",
      "reflect": false,
      "defaultValue": "null"
    },
    "imageUrl": {
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
      "attribute": "image-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "imageAlt": {
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
      "attribute": "image-alt",
      "reflect": false,
      "defaultValue": "null"
    },
    "personLocation": {
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
      "attribute": "person-location",
      "reflect": false,
      "defaultValue": "null"
    },
    "personName": {
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
      "attribute": "person-name",
      "reflect": false,
      "defaultValue": "null"
    },
    "centerVertical": {
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
      "attribute": "center-vertical",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "textColor": {}
  }; }
}
