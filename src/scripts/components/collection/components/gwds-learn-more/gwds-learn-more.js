import { Component, Host, h, Prop, State } from '@stencil/core';
import textContrast from '../../utils/utils';
export class GwdsLearnMore {
  constructor() {
    this.bgColor = 'dark-100';
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    //First Button
    this.firstButtonLabel = null;
    this.firstButtonUrl = null;
    this.firstButtonType = 'primary';
    this.firstButtonTarget = '_self';
    //Second Button
    this.secondButtonLabel = null;
    this.secondButtonUrl = null;
    this.secondButtonType = 'primary';
    this.secondButtonTarget = '_self';
    //Third Button
    this.thirdButtonLabel = null;
    this.thirdButtonUrl = null;
    this.thirdButtonType = 'primary';
    this.thirdButtonTarget = '_self';
    this.rowClasses = null;
    this.colClasses = null;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  render() {
    return (h(Host, { class: { 'gwds-learn-more': true } },
      h("section", { class: "section", style: {
          backgroundColor: `var(--gwds__color--${this.bgColor})`,
          color: `var(${this.textColor})`,
        } },
        h("div", { class: {
            'container': true,
            'pt-0': this.pt0,
            'pb-0': this.pb0,
          } },
          h("div", { class: { 'row d-flex align-items-center': true } },
            h("div", { class: { 'gwds-learn-more__col-left col col-12 col-lg-6': true } },
              this.mainTitle ? (h("h2", { class: {
                  'h3': true,
                  'mt-0': true,
                } }, this.mainTitle)) : null,
              h("slot", null)),
            h("div", { class: { 'col col-12 col-lg-6 d-lg-flex justify-content-lg-end': true } },
              this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null,
              this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null,
              this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null))))));
  }
  static get is() { return "gwds-learn-more"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-learn-more.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-learn-more.css"]
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
      "defaultValue": "'dark-100'"
    },
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
    },
    "firstButtonLabel": {
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
      "attribute": "first-button-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "firstButtonUrl": {
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
      "attribute": "first-button-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "firstButtonType": {
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
      "attribute": "first-button-type",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "firstButtonTarget": {
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
      "attribute": "first-button-target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "secondButtonLabel": {
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
      "attribute": "second-button-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "secondButtonUrl": {
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
      "attribute": "second-button-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "secondButtonType": {
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
      "attribute": "second-button-type",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "secondButtonTarget": {
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
      "attribute": "second-button-target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "thirdButtonLabel": {
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
      "attribute": "third-button-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "thirdButtonUrl": {
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
      "attribute": "third-button-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "thirdButtonType": {
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
      "attribute": "third-button-type",
      "reflect": false,
      "defaultValue": "'primary'"
    },
    "thirdButtonTarget": {
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
      "attribute": "third-button-target",
      "reflect": false,
      "defaultValue": "'_self'"
    }
  }; }
  static get states() { return {
    "rowClasses": {},
    "colClasses": {},
    "textColor": {}
  }; }
}
