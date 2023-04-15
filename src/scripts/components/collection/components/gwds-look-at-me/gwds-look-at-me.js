import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import { marked } from 'marked';
import textContrast from '../../utils/utils';
export class GwLookAtMe {
  constructor() {
    this.bgColor = null;
    this.preTitle = null;
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    this.alignContent = 'left';
    this.bgImage = '';
    this.bgSize = '1600px';
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
    this.rowClasses = null;
    this.colClasses = null;
    this.bgPosition = 'bottom right';
    this.textColor = null;
  }
  componentWillLoad() {
    //define this.rowClasses and this.colClasses css classes.
    if (this.alignContent === 'center') {
      this.rowClasses = 'row justify-content-md-center tac-md';
      this.colClasses = 'col-12 col-lg-8';
    }
    else if (this.alignContent === 'right') {
      this.rowClasses = 'row justify-content-md-end';
      this.colClasses = 'col-12 col-lg-7 col-xl-6';
    }
    else {
      //is left
      this.rowClasses = 'row';
      this.colClasses = 'col-12 col-lg-7 col-xl-6';
    }
    //define backgroundPosition
    if (this.alignContent === 'right') {
      this.bgPosition = 'bottom left';
    }
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  componentDidLoad() { }
  render() {
    return (h(Host, { class: { 'gwds-look-at-me': true }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        backgroundImage: `url(${this.bgImage})`,
        backgroundSize: this.bgSize,
        backgroundPosition: this.bgPosition,
        color: `var(${this.textColor})`,
      } },
      h("section", { class: { 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 } },
        h("div", { class: {
            container: true,
          } },
          h("div", { class: this.rowClasses },
            h("div", { class: this.colClasses },
              this.preTitle ? h("h3", { class: "h3 h3--light mt-0" }, this.preTitle) : null,
              this.mainTitle ? (h("h2", { class: {
                  'h1': true,
                  'mt-0': !this.preTitle ? true : false,
                } }, this.mainTitle)) : null,
              this.description ? h("div", { innerHTML: marked.parse(this.description) }) : h("slot", null),
              h("div", { class: {
                  'gwds-look-at-me__buttons-container': true,
                } },
                this.firstButtonLabel && this.firstButtonUrl ? (h("gwds-button", { label: this.firstButtonLabel, type: this.firstButtonType, url: this.firstButtonUrl, target: this.firstButtonTarget })) : null,
                this.secondButtonLabel && this.secondButtonUrl ? (h("gwds-button", { label: this.secondButtonLabel, type: this.secondButtonType, url: this.secondButtonUrl, target: this.secondButtonTarget })) : null,
                this.thirdButtonLabel && this.thirdButtonUrl ? (h("gwds-button", { label: this.thirdButtonLabel, type: this.thirdButtonType, url: this.thirdButtonUrl, target: this.thirdButtonTarget })) : null)))))));
  }
  static get is() { return "gwds-look-at-me"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-look-at-me.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-look-at-me.css"]
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
    "preTitle": {
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
      "attribute": "pre-title",
      "reflect": false,
      "defaultValue": "null"
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
    "alignContent": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'left' | 'center' | 'right'",
        "resolved": "\"center\" | \"left\" | \"right\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "align-content",
      "reflect": false,
      "defaultValue": "'left'"
    },
    "bgImage": {
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
      "attribute": "bg-image",
      "reflect": false,
      "defaultValue": "''"
    },
    "bgSize": {
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
      "attribute": "bg-size",
      "reflect": false,
      "defaultValue": "'1600px'"
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
    }
  }; }
  static get states() { return {
    "rowClasses": {},
    "colClasses": {},
    "bgPosition": {},
    "textColor": {}
  }; }
  static get elementRef() { return "el"; }
}
