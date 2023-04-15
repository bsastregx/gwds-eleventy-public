import { Component, Host, h, Prop, State } from '@stencil/core';
export class GwdsTooltip {
  constructor() {
    this.width = '200px';
    this.label = null;
    this.position = 'top';
    this.display = false;
    this.pointerEventsAuto = false;
  }
  mouseEnterSlotChildren() {
    this.pointerEventsAuto = true;
  }
  mouseLeaveHost() {
    this.pointerEventsAuto = false;
  }
  render() {
    return (h(Host, { class: {
        'gwds-tooltip': true,
        'gwds-tooltip--display': this.display,
        'gwds-tooltip--top': this.position === 'top',
        'gwds-tooltip--right': this.position === 'right',
        'gwds-tooltip--bottom': this.position === 'bottom',
        'gwds-tooltip--left': this.position === 'left',
        'gwds-tooltip--pointer-events-auto': this.pointerEventsAuto,
      }, onMouseLeave: this.mouseLeaveHost.bind(this) },
      h("div", { class: "gwds-tooltip__slot--children", onMouseEnter: this.mouseEnterSlotChildren.bind(this) },
        h("slot", { name: "children" })),
      h("div", { class: "gwds-tooltip__slot--content", style: { width: this.width } },
        this.label,
        h("slot", { name: "content" }))));
  }
  static get is() { return "gwds-tooltip"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-tooltip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-tooltip.css"]
  }; }
  static get properties() { return {
    "width": {
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
      "attribute": "width",
      "reflect": false,
      "defaultValue": "'200px'"
    },
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
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'top' | 'right' | 'bottom' | 'left'",
        "resolved": "\"bottom\" | \"left\" | \"right\" | \"top\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "position",
      "reflect": false,
      "defaultValue": "'top'"
    }
  }; }
  static get states() { return {
    "display": {},
    "pointerEventsAuto": {}
  }; }
}
