import { Component, Host, h, State, Prop, Element, Watch } from '@stencil/core';
import textContrast from '../../utils/utils';
export class GwdsMessage {
  constructor() {
    this.bgColor = 'red-50';
    this.fixed = false;
    this.linkLabel = null;
    this.linkUrl = null;
    this.linkTarget = '_self';
    this.buttonLabel = null;
    this.buttonUrl = null;
    this.buttonTarget = '_self';
    this.buttonCloses = false;
    this.closed = false;
    this.hideClose = false;
    this.opacity0 = false;
    this.height0 = false;
    this.textColor = null;
  }
  watchPropHandler(newValue) {
    if (newValue) {
      this.setHeight();
      this.opacity0 = true;
      setTimeout(() => {
        this.height0 = true;
      }, 200);
    }
  }
  setHeight() {
    const wrapperHeight = this.wrapper.offsetHeight;
    this.el.style.height = wrapperHeight + 'px';
  }
  close() {
    this.closed = true;
  }
  componentWillLoad() {
    //define text color based on contrast with the background
    this.textColor = textContrast(this.bgColor);
    if (this.buttonCloses) {
      this.hideClose = true;
    }
  }
  render() {
    return (h(Host, { class: {
        'gwds-message': true,
        'gwds-message--opacity-0': this.opacity0,
        'gwds-message--height-0': this.height0,
        'gwds-message--fixed': this.fixed,
        'gwds-message--hide-close': this.hideClose,
      }, style: {
        backgroundColor: `var(--gwds__color--${this.bgColor})`,
        color: `var(${this.textColor})`,
      } },
      h("div", { ref: el => (this.wrapper = el), class: "gwds-message__wrapper" },
        h("div", { class: { 'gwds-message__container': true } },
          h("p", { class: { 'gwds-message__message m-0': true } },
            h("slot", null)),
          h("div", { class: "gwds-message__link-button-container" },
            this.linkUrl && this.linkLabel ? (h("a", { class: "gwds-message__link", href: this.linkUrl }, this.linkLabel)) : null,
            this.buttonLabel && (this.buttonUrl || this.buttonCloses) ? (h("gwds-button", { class: "gwds-message__button", label: this.buttonLabel, url: this.buttonUrl, size: "small", onClick: this.buttonCloses ? this.close.bind(this) : null })) : null)),
        !this.hideClose ? (h("span", { onClick: this.close.bind(this), class: { 'gwds-message__close': true } },
          h("gwds-icon", { src: "/assets/icons/times.svg" }))) : null)));
  }
  static get is() { return "gwds-message"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-message.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-message.css"]
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
      "defaultValue": "'red-50'"
    },
    "fixed": {
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
      "attribute": "fixed",
      "reflect": false,
      "defaultValue": "false"
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
    "buttonLabel": {
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
      "attribute": "button-label",
      "reflect": false,
      "defaultValue": "null"
    },
    "buttonUrl": {
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
      "attribute": "button-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "buttonTarget": {
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
      "attribute": "button-target",
      "reflect": false,
      "defaultValue": "'_self'"
    },
    "buttonCloses": {
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
      "attribute": "button-closes",
      "reflect": false,
      "defaultValue": "false"
    },
    "closed": {
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
      "attribute": "closed",
      "reflect": false,
      "defaultValue": "false"
    },
    "hideClose": {
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
      "attribute": "hide-close",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
  static get states() { return {
    "opacity0": {},
    "height0": {},
    "textColor": {}
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "closed",
      "methodName": "watchPropHandler"
    }]; }
}
