import { Component, Host, h, State, Listen, Element, Prop } from '@stencil/core';
import textContrast from '../../utils/utils';
export class GwdsAccordion {
  constructor() {
    this.bgColor = null;
    this.mainTitle = null;
    this.pt0 = false; //padding-top:0
    this.pb0 = false; //padding-bottom:0
    this.textColor = null;
    this.pageJustLoaded = true; //This will prevent the accordion to collapse when resizeObserver is called on page load.
  }
  accordionOpenedHandler(event) {
    //close all opened accordions, except the one that emitted this event.
    const itemId = event.detail['id'];
    const accordionItems = this.el.querySelectorAll('gwds-accordion-item');
    accordionItems.forEach(item => {
      if (item.itemId !== itemId) {
        if (item.active) {
          item.active = false;
        }
      }
    });
  }
  componentWillLoad() {
    this.resizeObserver();
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    //define --accordion-text-color var equal to this.textColor, for styling the "+/-" color.
    this.el.style.setProperty('--accordion-text-color', `var(${this.textColor})`);
  }
  componentDidLoad() { }
  resizeObserver() {
    let prevWidth = 0;
    const resizeObserver = new ResizeObserver(entries => {
      var _a;
      for (const entry of entries) {
        //this.closeAccordions();
        const width = (_a = entry.borderBoxSize) === null || _a === void 0 ? void 0 : _a[0].inlineSize;
        if (typeof width === 'number' && width !== prevWidth) {
          prevWidth = width;
          if (this.pageJustLoaded) {
            this.pageJustLoaded = false;
            return;
          }
          else {
            this.closeAccordions();
          }
        }
      }
    });
    resizeObserver.observe(this.el);
  }
  closeAccordions() {
    const accordionItems = this.el.querySelectorAll('gwds-accordion-item');
    accordionItems.forEach(item => {
      if (item.active) {
        item.active = false;
      }
    });
  }
  render() {
    return (h(Host, { class: { 'gwds-accordion': true }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } },
      h("section", { class: "section" },
        h("div", { class: "container" },
          h("div", { class: "row" },
            h("div", { class: "col-12 col-lg-6" }, this.mainTitle ? h("h2", { class: "h2" }, this.mainTitle) : null),
            h("div", { class: "col-12 col-lg-6" },
              h("slot", null)))))));
  }
  static get is() { return "gwds-accordion"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-accordion.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-accordion.css"]
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
    }
  }; }
  static get states() { return {
    "textColor": {},
    "pageJustLoaded": {}
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "accordionOpened",
      "method": "accordionOpenedHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
