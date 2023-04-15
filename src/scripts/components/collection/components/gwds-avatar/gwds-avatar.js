import { Component, Host, h, Prop } from '@stencil/core';
export class GwdsAvatar {
  constructor() {
    this.imgUrl = null;
    this.imgAlt = null;
    this.size = 'm';
    this.line = false;
  }
  componentWillLoad() {
    if (this.imgUrl === null) {
      this.imgUrl = '/assets-stencil/images/avatars/avatar-placeholder.svg';
    }
  }
  render() {
    return (h(Host, { class: {
        'gwds-avatar': true,
        'gwds-avatar--line': this.line,
        'gwds-avatar--m': this.size === 'm',
        'gwds-avatar--l': this.size === 'l',
        'gwds-avatar--xl': this.size === 'xl',
        'gwds-avatar--xxl': this.size === 'xxl',
      } },
      h("div", { class: "gwds-avatar__image-wrapper" },
        h("img", { class: "gwds-avatar__image", src: this.imgUrl, alt: this.imgAlt })),
      h("slot", null)));
  }
  static get is() { return "gwds-avatar"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-avatar.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-avatar.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "imgUrl": {
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
      "attribute": "img-url",
      "reflect": false,
      "defaultValue": "null"
    },
    "imgAlt": {
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
      "attribute": "img-alt",
      "reflect": false,
      "defaultValue": "null"
    },
    "size": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'m' | 'l' | 'xl' | 'xxl'",
        "resolved": "\"l\" | \"m\" | \"xl\" | \"xxl\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "size",
      "reflect": false,
      "defaultValue": "'m'"
    },
    "line": {
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
      "attribute": "line",
      "reflect": false,
      "defaultValue": "false"
    }
  }; }
}
