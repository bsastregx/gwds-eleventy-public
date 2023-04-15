import { Component, Host, h, Prop, State, Element } from '@stencil/core';
import textContrast from '../../utils/utils';
export class GwdsStack {
  constructor() {
    this.bgColor = 'dark-100';
    this.mainTitle = null;
    this.description = null;
    this.pt0 = false;
    this.pb0 = false;
    this.textColor = null;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
  }
  slottedItems() {
    const buffer = [];
    const slottedContent = this.el.querySelectorAll('*');
    slottedContent.forEach(function (node, index) {
      const listItem = (h("li", { onClick: this.clickHandler.bind(this, index), class: "gwds-stack__item" }, node.getAttribute('main-title')));
      buffer.push(listItem);
    }.bind(this));
    return buffer;
  }
  clickHandler(index) {
    const slottedContent = this.el.querySelectorAll('gwds-stack-item');
    slottedContent.forEach(function (node, index2) {
      if (index === index2) {
        node.visible = true;
      }
      else {
        node.visible = false;
      }
    });
  }
  render() {
    return (h(Host, { class: {
        'gwds-stack': true,
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } },
      h("section", { class: { 'section': true, 'pt-0': this.pt0, 'pb-0': this.pb0 } },
        h("div", { class: { 'container': true, 'container--main': true } },
          h("div", { class: "row" },
            h("div", { class: "gwds-stack__col-left col-12 col-md-6 col-lg-5" },
              h("ul", { class: "unstyled" }, this.slottedItems())),
            h("div", { class: "gwds-stack__col-right col-12 col-md-6 col-lg-7" },
              h("slot", null)))))));
  }
  static get is() { return "gwds-stack"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-stack.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-stack.css"]
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
    "textColor": {}
  }; }
  static get elementRef() { return "el"; }
}
