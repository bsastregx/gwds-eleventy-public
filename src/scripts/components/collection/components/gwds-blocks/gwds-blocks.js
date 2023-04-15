import { Component, Host, h, Prop, State } from '@stencil/core';
import { marked } from 'marked';
import textContrast from '../../utils/utils';
export class GwdsBlocks {
  constructor() {
    this.bgColor = 'dark-100';
    this.mainTitle = null;
    this.description = null;
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
    this.linkUrl = null;
    this.linkLabel = null;
    this.linkTarget = '_self';
    this.display = 'grid-2';
    this.textColor = null;
    this.colClasses = 'col-12 col-lg-8';
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    if (this.display === 'grid-aside') {
      this.colClasses = 'col-12';
    }
  }
  perRow() {
    if (this.display === 'grid-2' || this.display === 'grid-aside') {
      return '2';
    }
    if (this.display === 'grid-3') {
      return '3';
    }
  }
  render() {
    return (h(Host, { class: {
        'gwds-blocks': true,
        'gwds-blocks--grid-2': this.display === 'grid-2',
        'gwds-blocks--grid-3': this.display === 'grid-3',
        'gwds-blocks--grid-aside': this.display === 'grid-aside',
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } },
      h("section", { class: "section" },
        h("div", { class: { 'container': true, 'container--main': true } },
          h("div", { class: "gwds-blocks__main-wrapper" },
            h("div", { class: "row" },
              h("div", { class: this.colClasses },
                this.mainTitle ? h("h2", { class: "h2" }, this.mainTitle) : null,
                this.description ? h("div", { innerHTML: marked.parse(this.description) }) : null)),
            h("div", { class: "gwds-blocks__buttons-wrapper" },
              this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null,
              this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null,
              this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)),
          h("gwds-grid", { perRow: this.perRow() },
            h("slot", null))))));
  }
  static get is() { return "gwds-blocks"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-blocks.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-blocks.css"]
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
    },
    "linkUrl": {
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
      "attribute": "link-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "linkLabel": {
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
      "attribute": "link-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "linkTarget": {
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
      "attribute": "link-target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "display": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'grid-2' | 'grid-3' | 'grid-aside'",
        "resolved": "\"grid-2\" | \"grid-3\" | \"grid-aside\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "display",
      "reflect": false,
      "defaultValue": "'grid-2'"
    }
  }; }
  static get states() { return {
    "textColor": {},
    "colClasses": {}
  }; }
}
