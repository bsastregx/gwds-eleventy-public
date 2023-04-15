import { Component, Host, h, Prop, State, Event, Watch } from '@stencil/core';
export class GwdsAccordionItem {
  constructor() {
    this.active = false;
    this.itemId = null; //for internal use
    this.itemTitle = null;
    this.accordionCollapseHeight = '0';
  }
  componentWillLoad() {
    this.itemId = this.itemTitle.replace(/\s/g, '-');
  }
  componentDidLoad() {
    this.active ? (this.accordionCollapseHeight = this.accordionBody.offsetHeight + 'px') : null;
  }
  closeAccordion() {
    this.accordionCollapseHeight = '0';
  }
  openAccordion() {
    this.accordionOpened.emit({ id: this.itemId });
    this.accordionCollapseHeight = this.accordionBody.offsetHeight + 'px';
  }
  toggleAccordion() {
    if (this.active) {
      this.active = false;
    }
    else {
      this.active = true;
    }
  }
  watchActiveHandler(newValue) {
    if (newValue) {
      this.openAccordion();
    }
    else {
      this.closeAccordion();
    }
  }
  render() {
    return (h(Host, { class: { 'gwds-accordion-item': true, 'gwds-accordion-item--active': this.active } },
      h("header", { class: { 'gwds-accordion-item__header': true } },
        h("button", { class: { 'gwds-accordion-item__button': true }, onClick: this.toggleAccordion.bind(this) },
          this.itemTitle,
          h("span", { class: { 'gwds-accordion-item__plusminus': true } }))),
      h("div", { ref: el => (this.accordionCollapse = el), class: { 'gwds-accordion-item__collapse': true }, style: { height: this.accordionCollapseHeight } },
        h("div", { ref: el => (this.accordionBody = el), class: { 'gwds-accordion-item__body': true } },
          h("slot", null)))));
  }
  static get is() { return "gwds-accordion-item"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-accordion-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-accordion-item.css"]
  }; }
  static get properties() { return {
    "active": {
      "type": "boolean",
      "mutable": true,
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
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "itemId": {
      "type": "string",
      "mutable": true,
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
      "attribute": "item-id",
      "reflect": true,
      "defaultValue": "null"
    },
    "itemTitle": {
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
      "attribute": "item-title",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "accordionCollapseHeight": {}
  }; }
  static get events() { return [{
      "method": "accordionOpened",
      "name": "accordionOpened",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "object",
        "resolved": "object",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "watchActiveHandler"
    }]; }
}
