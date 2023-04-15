import { Component, Host, h, Prop, State } from '@stencil/core';
export class GwdsBreadcrumbs {
  constructor() {
    this.url = null;
    this.breadcrumbs = [];
  }
  componentWillLoad() {
    this.breadcrumbs = this.url.split('/').filter(part => part !== '');
  }
  generateBreadcrumbs() {
    const buffer = [];
    this.breadcrumbs.forEach((part, i) => {
      let item;
      if (i === 0 && (part === 'en' || part === 'es' || part === 'pt')) {
        item = (h("a", { href: `https://www.genexus.com/${part}/` },
          h("i", { class: "fa-solid fa-house" })));
      }
      else {
        item = part;
      }
      buffer.push(item);
      if (i + 1 !== this.breadcrumbs.length) {
        buffer.push(h("i", { class: "fa-solid fa-greater-than" }));
      }
    });
    return buffer;
  }
  render() {
    return (h(Host, { class: { 'gwds-breadcrumbs': true } },
      h("section", { class: "section" },
        h("div", { class: "container" }, this.generateBreadcrumbs()))));
  }
  static get is() { return "gwds-breadcrumbs"; }
  static get originalStyleUrls() { return {
    "$": ["gwds-breadcrumbs.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["gwds-breadcrumbs.css"]
  }; }
  static get properties() { return {
    "url": {
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
      "attribute": "url",
      "reflect": false,
      "defaultValue": "null"
    }
  }; }
  static get states() { return {
    "breadcrumbs": {}
  }; }
}
